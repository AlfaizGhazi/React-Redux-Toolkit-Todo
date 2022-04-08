import * as React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  StyledDiv,
  StyledInput,
  StyledButton,
  StyledForm,
  StyledLabel,
  StyledH6,
  StyledB,
  StyledSelect,
  StyledOption,
  StyledP,
} from "../../Utils";

export const UseFormikHook = (props) => {
  const { isDarkMode } = props;

  const formik = useFormik({
    initialValues: {
      username: "",
      fullname: "",
      email: "",
      status: "",
      country: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .max(10, "username must be less than on equal to 10 characters!")
        .required("this is required field!"),
      fullname: Yup.string().required("this is required field!"),
      email: Yup.string()
        .email("please provide a valid email!")
        .required("this is required field!"),
      status: Yup.string().required("this is required field!"),
      country: Yup.string().required("this is required field!"),
    }),
    onSubmit: (values) => {
      console.log("Form Submitted::", values);
    },
  });
  return (
    <StyledDiv
      className="formik--wrapper container my-2"
      isDarkMode={isDarkMode}
    >
      <StyledForm isDarkMode={isDarkMode} onSubmit={formik.handleSubmit}>
        {/* USERNAME */}
        <StyledDiv className="mb-3" isDarkMode={isDarkMode}>
          <StyledLabel
            htmlFor="username"
            className="form-label"
            isDarkMode={isDarkMode}
          >
            <StyledB>Username</StyledB>
          </StyledLabel>
          <StyledInput
            type="text"
            className="form-control"
            id="username"
            name="username"
            aria-describedby="emailHelp"
            isDarkMode={isDarkMode}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
          />
          {formik.touched.username && formik.errors.username && (
            <StyledP className="form--errors">{formik.errors.username}</StyledP>
          )}
        </StyledDiv>

        {/* FULL NAME */}
        <StyledDiv className="mb-3" isDarkMode={isDarkMode}>
          <StyledLabel
            htmlFor="fullname"
            className="form-label"
            isDarkMode={isDarkMode}
          >
            <StyledB>Full Name</StyledB>
          </StyledLabel>
          <StyledInput
            type="text"
            className="form-control"
            id="fullname"
            name="fullname"
            aria-describedby="emailHelp"
            isDarkMode={isDarkMode}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.fullname}
          />
          {formik.touched.fullname && formik.errors.fullname && (
            <StyledP className="form--errors">{formik.errors.username}</StyledP>
          )}
        </StyledDiv>

        {/* EMAIL */}
        <StyledDiv className="mb-3" isDarkMode={isDarkMode}>
          <StyledLabel
            htmlFor="email"
            className="form-label"
            isDarkMode={isDarkMode}
          >
            <StyledB>Email Address</StyledB>
          </StyledLabel>
          <StyledInput
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            isDarkMode={isDarkMode}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <StyledP className="form--errors">{formik.errors.username}</StyledP>
          )}
        </StyledDiv>

        {/* STATUS */}
        <StyledDiv className="form--status--wrapper" isDarkMode={isDarkMode} s>
          <StyledH6 isDarkMode={isDarkMode}>
            <StyledB>Status:</StyledB>
          </StyledH6>
          <StyledDiv className="mb-3 form-check" isDarkMode={isDarkMode}>
            {/* SINGLE */}
            <StyledInput
              type="radio"
              className="form-check-input"
              id="status_single"
              name="status"
              value="single"
              onChange={formik.handleChange}
              isDarkMode={isDarkMode}
            />
            <StyledLabel
              className="form-check-label"
              htmlFor="status_single"
              isDarkMode={isDarkMode}
            >
              Single
            </StyledLabel>
          </StyledDiv>

          <StyledDiv className="mb-3 form-check" isDarkMode={isDarkMode}>
            {/* COMMITED */}
            <StyledInput
              type="radio"
              className="form-check-input"
              id="status_commited"
              name="status"
              value="commited"
              onChange={formik.handleChange}
              isDarkMode={isDarkMode}
            />
            <StyledLabel
              className="form-check-label"
              htmlFor="status_commited"
              isDarkMode={isDarkMode}
            >
              Commited
            </StyledLabel>
          </StyledDiv>

          <StyledDiv className="mb-3 form-check" isDarkMode={isDarkMode}>
            {/* CODER */}
            <StyledInput
              type="radio"
              className="form-check-input"
              id="status_coder"
              name="status"
              value="coder"
              onChange={formik.handleChange}
              isDarkMode={isDarkMode}
            />
            <StyledLabel
              className="form-check-label"
              htmlFor="status_coder"
              isDarkMode={isDarkMode}
            >
              Coder
            </StyledLabel>
          </StyledDiv>
          {formik.touched.status && formik.errors.status && (
            <>
              <br />
              <StyledP className="form--errors">
                {formik.errors.username}
              </StyledP>
            </>
          )}
        </StyledDiv>

        {/* SELECT */}
        <StyledDiv className="mb-3" isDarkMode={isDarkMode}>
          <StyledSelect
            className="form-select"
            name="country"
            aria-label="Default select example"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isDarkMode={isDarkMode}
          >
            <StyledOption isDarkMode={isDarkMode} value="">
              Select Country
            </StyledOption>
            <StyledOption isDarkMode={isDarkMode} value="india">
              India
            </StyledOption>
            <StyledOption isDarkMode={isDarkMode} value="england">
              England
            </StyledOption>
            <StyledOption isDarkMode={isDarkMode} value="dubai">
              Dubai
            </StyledOption>
          </StyledSelect>
          {formik.touched.country && formik.errors.country && (
            <StyledP className="form--errors">{formik.errors.username}</StyledP>
          )}
        </StyledDiv>

        <StyledButton
          type="submit"
          className={isDarkMode ? "btn btn-danger" : "btn btn-dark"}
          isDarkMode={isDarkMode}
        >
          Submit
        </StyledButton>
      </StyledForm>
    </StyledDiv>
  );
};
