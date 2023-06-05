import { useCallback, useState } from "react";
import * as Yup from "yup";
import { Link, Link as RouterLink } from "react-router-dom";
// form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// @mui
// import { Link, Stack, Alert, IconButton, InputAdornment } from "@mui/material";
// import { LoadingButton } from "@mui/lab";
// components
import FormProvider, { RHFTextField } from "../../components/hook-form";
import { Eye, EyeSlash } from "phosphor-react";
// import { LoginUser } from "../../redux/slices/auth";
import { useDispatch, useSelector } from "react-redux";
import {
  Alert,
  Button,
  IconButton,
  InputAdornment,
  Stack,
} from "@mui/material";
const LoginForm = () => {
  // const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  // const {isLoading} = useSelector((state) => state.auth);

  const LoginSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    about: Yup.string().required("About is required"),
    avatarUrl: Yup.string().required("Avatar is required").nullable(true),
  });

  const defaultValues = {
    name: "",
    about: "",
    // avatarUrl:
  };

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    reset,
    watch,
    control,
    setError,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = methods;

  const values = watch();

  const handleDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];

      const newFile = Object.assign(file, {
        preview: URL.createObjectURL(file),
      });

      if (file) {
        setValue("ava", newFile, { shouldValidate: true });
      }
    },
    [setValue]
  );

  const onSubmit = async (data) => {
    try {
      console.log(data);
      // submit data to backend
      // dispatchEvent(LoginUser(data));
    } catch (error) {
      console.error(error);
      reset();
      setError("afterSubmit", {
        ...error,
        message: error.message,
      });
    }
  };
  return (
    <div>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          <Stack spacing={3}>
            {!!errors.afterSubmit && (
              <Alert severity="error">{errors.afterSubmit.message}</Alert>
            )}

            <RHFTextField
              name="name"
              label="Name "
              helperText={"This name is visibile to your contacts"}
            />

            <RHFTextField
              multiline
              rows={4}
              maxRows={5}
              name="about"
              label="About"
            />
          </Stack>

          <Stack direction={"row"} justifyContent={"end"}>
            <Button
              // fullWidth
              color="primary"
              size="large"
              type="submit"
              variant="outlined"
              // loading={isLoading}
              sx={{
                bgcolor: "text.primary",
                color: (theme) =>
                  theme.palette.mode === "light" ? "common.white" : "grey.800",
                "&:hover": {
                  bgcolor: "text.primary",
                  color: (theme) =>
                    theme.palette.mode === "light"
                      ? "common.white"
                      : "grey.800",
                },
              }}
            >
              Save
            </Button>
          </Stack>
        </Stack>
      </FormProvider>
    </div>
  );
};

export default LoginForm;
