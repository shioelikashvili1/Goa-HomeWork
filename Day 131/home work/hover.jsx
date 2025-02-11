const HoverButton = () => {
    return (
      <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
        Hover Me
      </button>
    );
  };
  


  
  const HoverText = () => {
    return (
      <p className="text-gray-800 hover:text-red-500">
        Hover over this text to change its color.
      </p>
    );
  };
  

  const HoverImage = () => {
    return (
      <img 
        src="https://via.placeholder.com/150" 
        alt="Placeholder" 
        className="transition-transform duration-300 transform hover:scale-110"
      />
    );
  };
  
  const HoverCard = () => {
    return (
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300">
        <h2 className="text-xl font-bold">Hover over me</h2>
        <p className="text-gray-600">This card will have a bigger shadow when hovered.</p>
      </div>
    );
  };
  
  export default HoverCard;
  
  