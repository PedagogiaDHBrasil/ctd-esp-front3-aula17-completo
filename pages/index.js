import React from "react";
import { useForm } from "react-hook-form";
import { Input, TextField, Typography, Box } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    email: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

const Home = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Login blog de receitas
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id="outlined-basic"
          label="Digite seu email"
          variant="outlined"
          {...register("email")}
          className="input"
          sx={{
            width: 1,
            my: 2,
            borderRadius: 1,
          }}
        />
        <Typography sx={{ color: "info.main" }}>
          {errors.email?.type === "required" && "Digite um email"}
        </Typography>

        <TextField
          id="outlined-basic"
          label="Digite sua senha"
          variant="outlined"
          type="password"
          className="input"
          {...register("password")}
          sx={{
            width: 1,
            my: 2,
            bgcolor: "error.light",
            borderRadius: 1,
          }}
        />
        <Typography sx={{ color: "info.main" }}>
          {errors.password?.type === "required" && "Senha é obrigatória"}
        </Typography>

        <Box className="checkbox">
          <Input type="checkbox" {...register("term")} />
          <Typography>Manter logado</Typography>
        </Box>

        <Input
          variant="contained"
          type="submit"
          value="Logar"
          sx={{ width: 1, mt: 4, borderRadius: 1 }}
        />
      </form>
    </Box>
  );
};

export default Home;
