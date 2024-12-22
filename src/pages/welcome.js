const Welcome = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center relative overflow-hidden font-sans">
      <div className="video-container absolute top-0 left-0 w-full h-full z-[-1]">
        <video
          autoPlay
          loop
          muted
          className="object-cover w-full h-full border-none"
        >
          <source src="\dernier.mp4" type="video/mp4" />
          Your browser does not support HTML5 videos.
        </video>
      </div>
      <div className="overlay absolute top-0 left-0 w-full h-full z-10 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white text-center">
        <h1 className="title text-3xl text-red-500 uppercase tracking-wider font-bold mb-5 animate-glow">
          Welcome to the world of cinema
        </h1>
        <p className="subtitle text-xl mb-8 animate-fadeIn">
          Ready to begin your adventure?
        </p>
        <a
          href="/home"
          className="start-button py-4 px-8 bg-red-500 text-white border-none rounded-md text-lg cursor-pointer transition-all duration-300 ease-in-out transform hover:bg-red-700 hover:translate-y-[-5px] hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Start
        </a>
      </div>
    </div>
  );
};

export default Welcome;
