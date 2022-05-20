import { Link } from 'react-router-dom';

const ForgetPassword = () => {
  const sendEmailSubmitHandler = (e) => {
    e.preventDefault();

    alert('Email submitted!');
  };

  return (
    <div className="container mx-auto mb-16">
      <div className="breadcumb-container mb-5">
        <Link to="/login" className="text-borderSecondary">
          Login
        </Link>
      </div>

      <div className="w-full max-w-screen-md mx-auto">
        <section>
          <h1 className="text-3xl font-bold">Apa anda melupakan password?</h1>

          <p className="font-light mt-2">
            Jika anda lupa, ketikkan email anda yang digunakan untuk login. Kami
            akan mengirimkan email berisikan password sementara
          </p>

          <form
            onSubmit={sendEmailSubmitHandler}
            className="max-w-[350px] mt-8 space-y-6"
          >
            <div className="input flex flex-col">
              <label htmlFor="email" className="text-lg">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="border-b border-b-solid border-b-black"
              />
            </div>

            <button
              type="submit"
              className="w-full max-w-[350px] bg-primary px-x py-2 text-white"
            >
              KIRIM
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default ForgetPassword;
