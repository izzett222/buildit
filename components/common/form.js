export default function Form() {
  return (
    <form className="drop-shadow-form bg-form flex-1 rounded-[5px] flex py-[50px] px-10 flex-col gap-7">
      <div className="flex gap-5">
        <div className="flex-1">
          <p className="text-sm text-[#678c92]">name</p>
          <input type="text" className="border-solid border-[#486a6f] border rounded-[3px] h-10 block w-full bg-transparent" />
        </div>
        <div className="flex-1">
          <p className="text-sm text-[#678c92]">Email</p>
          <input type="text" className="border-solid border-[#486a6f] border rounded-[3px] h-10 block w-full bg-transparent" />
        </div>
      </div>
      <div className="flex gap-5">
        <div className="flex-1">
          <p className="text-sm text-[#678c92]">Subject</p>
          <input type="text" className="border-solid border-[#486a6f] border rounded-[3px] h-10 block w-full bg-transparent" />
        </div>
      </div>
      <div className="flex gap-5">
        <div className="flex-1">
          <p className="text-sm text-[#678c92]">Message</p>
          <textarea type="text" className="border-solid border-[#486a6f] border rounded-[3px] h-10 block w-full bg-transparent min-h-[130px]" />
        </div>
      </div>
      <button className="text-[#f4f7ff] p-[15px] bg-[#4397a4] rounded-[5px]">Send message</button>
    </form>
  );
}
