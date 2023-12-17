import React from "react";

const Map = () => {
  return (
    <div>
      <iframe
        className="w-full rounded-lg"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1696705.7403777172!2d149.6154176423618!3d-33.84124645645658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129838f39a743f%3A0x3017d681632a850!2z4KS44KS_4KSh4KSo4KWAIOCkqOCljeCkr-ClgiDgpLjgpL7gpIngpKUg4KS14KWH4KSy4KWN4KS4LCDgpIXgpLfgpY3gpJ_gpY3gpLDgpYfgpLLgpL_gpK_gpL4!5e0!3m2!1sne!2snp!4v1702808193019!5m2!1sne!2snp"
        width="600"
        height="450"
        // style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
};

export default Map;
