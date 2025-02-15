import React,{useState,useEffect} from 'react'

export default function FromApp() {

    
        const [inputValue, setInputValue] = useState("");

        
        const handleChange = (event) => {
          setInputValue(event.target.value);
        };
      
        return (
          <div className="p-4  mx-auto">
            <input
              type="text"
              placeholder="Type something..."
              value={inputValue}
              onChange={handleChange}
              className="border p-2 w-full rounded-lg"
            />
            <p className="mt-2 text-lg">You typed: {inputValue}</p>
          </div>
        );
      };
  
  

