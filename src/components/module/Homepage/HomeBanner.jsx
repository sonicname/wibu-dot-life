import React from 'react';

const HomeBanner = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row mt-4">
      <div className="w-[500px] p-3">
        <img
          className="w-full h-full object-cover"
          srcSet="/assets/banner/banner-nezuko.png 2x"
          alt="nezuko-banner"
        />
      </div>
      <div className="flex-1 flex flex-col leading-relaxed p-[20px] lg:relative lg:self-stretch lg:justify-around">
        <h1 className="text-2xl font-bold text-[#fffffe] text-center lg:text-left lg:text-5xl">
          Welcome to the club!
        </h1>
        <p className="text-[16px] text-justify mt-4 text-[#94a1b2] lg:text-2xl lg:font-semibold lg:mt-0">
          Wibu.life là một trang đoc truyện (manga, comic, hentai - maybe) miễn phí. Là một dự án để
          luyện tập về Reactjs và Tailwindcss. Còn về thiết kế thì lấy cảm hứng từ mấy trang đọc
          truyện trên mạng.
        </p>

        <button className="p-3 bg-[#7f5af0] text-[#fffffe] font-semibold rounded mt-4 lg:w-[300px] lg:text-2xl">
          Join the club!
        </button>
      </div>
    </div>
  );
};

export default HomeBanner;
