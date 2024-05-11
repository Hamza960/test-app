import React, { useState, useEffect }  from 'react';
import imageData from "../imageData.json";
import menuOptions from '../menuOptions.json';

const Dashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  const [contextMenuPosition, setContextMenuPosition] = useState({ x: 0, y: 0 });
  const [showContextMenu, setShowContextMenu] = useState(false);

  const handleContextMenu = (e) => {
    e.preventDefault();
    setContextMenuPosition({ x: e.clientX, y: e.clientY });
    setShowContextMenu(true);
  };

  const handleMenuItemClick = (action) => {
    setShowContextMenu(false);
    // Handle action based on the clicked menu item
    switch (action) {
      case 'addFolder':
        // Add folder logic
        break;
      case 'addWordFile':
        // Add Word file logic
        break;
      case 'addExcelFile':
        // Add Excel file logic
        break;
      case 'addPowerPointFile':
        // Add PowerPoint file logic
        break;
      default:
        break;
    }
  };


  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const formatTime = (date) => {
    return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
  }

  return (
    <>
        <div className='dashboard-screen'  onContextMenu={handleContextMenu}>
            
            <header className='header'>
            <nav>
                <ul>
                    <li><img src = "./images/wifi.png" alt = "links" className='img-fluid'></img></li>
                    <li><img src = "./images/sound.png" alt = "links" className='img-fluid'></img></li>
                    <li><img src = "./images/battery.png" alt = "links" className='img-fluid'></img></li>
                
                </ul>
            </nav>
            
                
            </header>
            {showContextMenu && (
        <div
          style={{
            position: 'absolute',
            top: contextMenuPosition.y,
            left: contextMenuPosition.x,
            background: 'white',
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
            padding: '8px',
            borderRadius: '4px',
          }}
        >
          {menuOptions.options.map((option, index) => (
            <div key={index}>
              <div onClick={() => handleMenuItemClick(option.action)}>{option.label}</div>
              {option.subOptions && (
                <div style={{ marginLeft: '16px' }}>
                  {option.subOptions.map((subOption, subIndex) => (
                    <div key={subIndex} onClick={() => handleMenuItemClick(subOption.action)}>
                      {subOption.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
            
            <div className='text-center mt-5'>
                <h1 className='text-white'>{formatTime(currentTime)}</h1>
                <p>{currentTime.toDateString()} </p>
            </div>
            <div className='app-imgs'>
            {imageData.map((image) => (
                <img key={image.id} src={`${process.env.PUBLIC_URL}${image.url}`} alt={`Image ${image.id}`} />
            ))}
            </div>
            
        </div>
        
    </>
  )
}

export default Dashboard