import FormLogin from "../../../components/publicComponents/login/FormLogin";
import { Title } from "../../../components/publicComponents/register/Title";

export const InicioSesion = () => {
  return (

   <>
   <section className="flex flex-col justify-center items-center h-screen w-full md:container md:mx-auto animate-blurred-fade-in">

      <article className="flex flex-col space-y-2 md:flex-row w-full">
        <div className="flex flex-col justify-center w-full space-y-6 mx-auto md:mx-16 animate-blurred-fade-in md:text-left text-center">
          <Title name="TECHONE" />
          <Subtitle name="Gestión inteligente, resultados sorprendentes" /> 
          <Information name="Inicia sesión llenando nuestro formulario o bien iniciando sesión con tus redes." />
          <Logos />
        </div>


        <div className="flex justify-center items-center h-auto w-full animate-blurred-fade-in">
          <section className="w-full md:w-full lg:w-full xl:w-full p-4">
            <section className="flex flex-col mx-4">
              <div className="bg-[#82F7FF]/[17%] rounded-md  w-full justify-center border border-[#38FF88]" >  
                <FormLogin/>

                <section className="flex flex-row space-x-20 m-1 ">
                <p className="text-[#DBFF5E]">¿No tienes una cuenta aún? <a href="Register" className="text-[#faffe7]">Registrate </a></p>
                <a href="/forgot-password" className="text-white "> Olvide mi contraseña</a>


        <section className="flex w-full justify-center md:justify-start mt-4 px-4">
            <p className="text-white text-center md:text-left ml-0 md:ml-5 mt-20">
              ¿Problemas al iniciar sesión? <a href="forgot-password" className="text-[#DBFF5E]">Reestablece tu contraseña</a>
            </p>
          </section>
      </section>
    </>
  );
};


