function NewSeahorse() {
    return (
      <div>
        <h2 className="text-xl font-semibold">ახალი ზღვის ცხენის დამატება</h2>
        <form className="space-y-4">
          <input type="text" placeholder="სახელი" className="border p-2 w-full" />
          <textarea placeholder="აღწერა" className="border p-2 w-full"></textarea>
          <button type="submit" className="bg-blue-500 text-white p-2">დამატება</button>
        </form>
      </div>
    );
  }
  
  export default NewSeahorse;
  