import React from 'react';
import iconsConfig from './iconsConfig.model';

// Define the Props interface
interface IconsProps {
  iconName: keyof typeof iconsConfig; // Define iconName as a keyof iconsConfig
}
const getLayoutIcon = (iconName: keyof typeof iconsConfig) => {
    return iconsConfig[iconName];
  };
// Define the component with Props interface
const LayoutIcon: React.FC<IconsProps> = (props) => {
  const { iconName } = props;

  // Check if iconName exists in iconsConfig, otherwise set ico to null
  const ico = getLayoutIcon(iconName);

  // Render the icon if it exists, otherwise render null
  return ico ? <div dangerouslySetInnerHTML={{ __html: ico }} /> : null;
};



export default LayoutIcon;
