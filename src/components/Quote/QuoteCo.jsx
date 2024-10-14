import React from "react";

function Quote({ quotes }) {
  return (
    <>
      <div className="flex flex-col gap-10">
        {quotes.map((item, index) => (
          <div
            key={"quote" + index}
            className="flex flex-col p-8 border border-gray-200 shadow-md rounded-lg items-center justify-center text-center text-gray"
          >
            <p className="text-3xl font-bold text-gray-800 mb-5">
              {item.quote}
            </p>
            <h2 className="text-xl text-gray-600">{item.author}</h2>
          </div>
        ))}
      </div>
    </>
  );
}

export default Quote;
