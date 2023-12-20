import React from 'react';
import 'react-router-dom'; // Import Link from react-router-dom
import './Type.css'; // Import your CSS file for styling

const Type = () => {
  return (
    <div className="typeU-container">
      <div className="type-upper-container">
        <div className="type-upper-image" />
      </div>

      <div className="type-lower-container">
      <div className="plastic-waste-tips">
      <h2>Types Of Plastic Waste</h2>
      <ul>
        <p>1. PET (Polyethylene Terephthalate) - Resin Code 1:
        <li>Commonly used for water and soda bottles, as well as food packaging. It is recyclable and often used in the production of polyester fibers for textiles.</li></p> 
        <p>2. HDPE (High-Density Polyethylene) - Resin Code 2:
        <li>Found in milk jugs, detergent bottles, and some plastic bags. It is a widely recycled plastic and is used for products like plastic lumber, recycling bins, and pipes.</li></p> 
        <p>3. PVC (Polyvinyl Chloride) - Resin Code 3:
        <li>Used in pipes, cable insulation, clothing, and inflatable structures. PVC is less commonly recycled and can release harmful chlorine gas when incinerated.</li></p> 
        <p>4. LDPE (Low-Density Polyethylene) - Resin Code 4:
        <li>Found in plastic bags, squeezable bottles, and some packaging. It is considered less toxic than other plastics but is not always accepted in curbside recycling programs.</li></p> 
        <p>5. PP (Polypropylene) - Resin Code 5:
        <li>Used in yogurt containers, medicine bottles, and packaging. PP is widely used and is recyclable, often turned into brooms, auto parts, and storage bins.</li></p> 
        <p>6. PS (Polystyrene) - Resin Code 6:
        <li>Commonly known as Styrofoam, it is used in disposable plates, cups, and packaging materials. It is not easily recyclable and poses environmental concerns due to its slow decomposition.</li></p> 
        <p>7. Other - Resin Code 7:
        <li>This category includes various plastics that do not fit into the other six categories. It may include polycarbonate (used in some water bottles) and other mixed plastics. Some plastics in this category can be recycled, but others may not be economically feasible to recycle.</li></p> 
        <p>It's important to note that while these categories help identify the general type of plastic, not all plastics within a category are created equal. The recycling options and environmental impact can vary based on the specific composition and additives used in the manufacturing process. Additionally, not all plastic items are labeled with a resin code, which can complicate the recycling process. Proper disposal and recycling practices are crucial for minimizing the environmental impact of plastic waste.</p> 

        
      </ul>
    </div>
      </div>
    </div>
  );
};

export default Type;
