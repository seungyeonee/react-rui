import { useFormik } from "formik";
import * as Yup from "yup";
import { Box, Button, Container, FormControl, TextField } from "../../components";
import { useEffect, useRef } from "react";

const SignupPage = () => {
  const tel1Ref = useRef(null);
  const tel2Ref = useRef(null);
  const tel3Ref = useRef(null);
  const formik = useFormik({
    initialValues: {
      id: "",
      password: "",
      email: "",
      tel1: "",
      tel2: "",
      tel3: "",
    },
    validationSchema: Yup.object({
      id: Yup.string()
        .min(3, "아이디는 최소 3글자 이상이어야 합니다.")
        .max(15, "아이디는 최대 15글자 이하이어야 합니다.")
        .required("아이디를 입력해주세요."),
      password: Yup.string()
        .min(8, "비밀번호는 최소 8글자 이상이어야 합니다.")
        .max(20, "비밀번호는 최대 20글자 이하이어야 합니다.")
        .required("비밀번호를 입력해주세요."),
      email: Yup.string()
        .email("유효하지 않은 이메일 형식입니다.")
        .required("이메일을 입력해주세요."),
      tel1: Yup.string().required("전화번호를 입력해주세요."),
      tel2: Yup.string().required("전화번호를 입력해주세요."),
      tel3: Yup.string().required("전화번호를 입력해주세요."),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  useEffect(() => {
    if (tel1Ref.current) {
      console.log(tel1Ref);
    }
    if (tel2Ref.current) {
      console.log(tel2Ref);
    }
    if (tel3Ref.current) {
      console.log(tel3Ref);
    }
    console.log(formik);
  }, [formik, tel1Ref, tel2Ref, tel3Ref]);

  return (
    <Container>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          id="id"
          name="id"
          type="text"
          label="ID"
          line={true}
          onChange={formik.handleChange}
          value={formik.values.id}
          error={formik.touched.id && formik.errors.id ? true : false}
          errorMessage={formik.errors.id}
        />

        <TextField
          id="password"
          name="password"
          type="password"
          label="PASSWORD"
          line={true}
          onChange={formik.handleChange}
          value={formik.values.password}
          error={
            formik.touched.password && formik.errors.password ? true : false
          }
          errorMessage={formik.errors.password}
          spacing={10}
        />

        <TextField
          id="email"
          name="email"
          type="email"
          label="EMAIL"
          line={true}
          onChange={formik.handleChange}
          value={formik.values.email}
          error={formik.touched.email && formik.errors.email ? true : false}
          errorMessage={formik.errors.email}
          spacing={10}
        />
        <FormControl
          isFocus={
            document.activeElement === tel1Ref?.current ||
            document.activeElement === tel2Ref?.current ||
            document.activeElement === tel3Ref?.current ||
            formik.values.tel1.length > 0 ||
            formik.values.tel2.length > 0 ||
            formik.values.tel3.length > 0
              ? true
              : false
          }
          label="PHONE NUMBER"
          error={formik.touched.tel1 && formik.errors.tel1 ? true : false}
          errorMessage={formik.errors.tel1}
          spacing={10}
        >
          <TextField
            id="tel1"
            name="tel1"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.tel1}
            ref={tel1Ref}
          />
          <span>-</span>
          <TextField
            id="tel2"
            name="tel2"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.tel2}
            ref={tel2Ref}
          />
          <span>-</span>
          <TextField
            id="tel3"
            name="tel3"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.tel3}
            ref={tel3Ref}
          />
        </FormControl>
        <Box spacing={10} gap={8}>
          <Button flex={1}>취소</Button>
          <Button flex={2} type="submit">
            가입하기
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default SignupPage;
