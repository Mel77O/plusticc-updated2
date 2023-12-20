import React from 'react';
import 'react-router-dom'; // Import Link from react-router-dom
import './Manage.css'; // Import your CSS file for styling

const Manage = () => {
  return (
    <div className="manageU-container">
      <div className="manage-upper-container">
        <div className="manage-upper-image" />
      </div>

      <div className="manage-lower-container">
      <div className="plastic-waste-tips">
      <h2>TIPS TO MANAGE HOUSEHOLD PLASTIC WASTE</h2>
      <ul>
        <p>1. Reduce Single-Use Plastics:
        <li>Avoid single-use plastics like plastic bags, straws, and disposable cutlery. Opt for reusable alternatives such as cloth bags, stainless steel, or bamboo straws, and durable utensils.</li></p> 
        <p>2. Recycle Properly:
        <li>Familiarize yourself with local recycling guidelines and ensure that you follow them correctly. Rinse and clean recyclables before disposing of them to prevent contamination.</li></p> 
        <p>3. Use a Reusable Water Bottle:
        <li>Instead of buying bottled water, invest in a reusable water bottle. This reduces the need for single-use plastic bottles and helps you stay hydrated without contributing to plastic waste.</li></p> 
        <p>4. Choose Products with Minimal Packaging:
        <li>Be mindful of the packaging when shopping. Choose products with minimal or eco-friendly packaging. Buying in bulk can also reduce the amount of packaging waste.</li></p> 
        <p>5. Composting Organic Waste:
        <li>Set up a composting system for organic waste like food scraps. This reduces the overall amount of waste produced and creates nutrient-rich compost for your garden.</li></p> 
        <p>6. Repurpose and Upcycle:
        <li>Get creative with repurposing plastic items. For example, use plastic containers for storage, turn old plastic bottles into planters, or use them for arts and crafts.</li></p> 
        <p>7. Donate or Sell Items:
        <li>If you have plastic items that are still in good condition but no longer needed, consider donating or selling them instead of discarding.</li></p>
        <p>8. Educate Yourself and Others:
        <li>Stay informed about the environmental impact of plastic and share your knowledge with friends and family. The more people understand the consequences of plastic waste, the more likely they are to adopt sustainable practices.</li></p>
        <p>9. Choose Alternatives: 
        <li>Look for alternatives to plastic products. For example, use glass or stainless steel containers for food storage instead of plastic containers.</li></p>
        <p>10. Participate in Community Cleanups:
        <li>Join or organize community cleanups to help remove plastic waste from public spaces. This not only contributes to a cleaner environment but also raises awareness about the issue.</li></p>
        <p>11. Support Businesses with Sustainable Practices:
        <li>Choose to support businesses that prioritize sustainability and environmentally friendly practices. This includes companies that use minimal packaging or offer alternatives to plastic.</li></p>
        <p>12. Be Mindful of Microplastics:
        <li>Be aware of products that contain microplastics, such as some personal care items. Choose products that are microbead-free and environmentally friendly.</li></p>
        <p>By incorporating these tips into your daily routine, you can significantly reduce your household's plastic waste and contribute to a more sustainable and environmentally friendly lifestyle.</p>
        
      </ul>
    </div>
      </div>
    </div>
  );
};

export default Manage;
