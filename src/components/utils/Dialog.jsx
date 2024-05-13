import { PropTypes } from "prop-types";
import css from "./Dialog.module.scss";
import useFocusTrap from "../../hooks/useFocusTrap";
import { useRef, useEffect } from 'react';
export default function Dialog({ title, onClose, children, isOpen, ...rest }) {
  const ref = useFocusTrap();
  const titleRef = useRef();
  useEffect(()=>{
    const focusTimeOut = () => {
      setTimeout(()=>{
        titleRef.current.focus()
      },100)
    }
    if(titleRef.current){
      focusTimeOut();
    }
    return () => {
      clearTimeout(focusTimeOut)
    }
  },[])
  return (
    <>
      <div
        aria-hidden={isOpen ? true : false}
        className={`${css.dimm} ${isOpen ? css.open : css.close}`}
      />
      <div
        ref={ref}
        className={`${css.dialog} ${isOpen ? css.open : css.close}`}
        {...rest}
      >
        <div className={css.header}>
          <h3 className={css.title} tabIndex={0} ref={titleRef}>
            {title}
          </h3>
        </div>
        <div className={css.contents} tabIndex={0}>
          {children}
        </div>
        <div className={css.footer}>
          <button className={css.footer} onClick={onClose}>
            {title} 닫기
          </button>
        </div>
      </div>
    </>
  );
}

Dialog.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};
