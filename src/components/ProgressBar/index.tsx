
interface propType {
    bgcolor : string
    completed: number
}

interface fillerType {
  height: string,
      width: string,
      backgroundColor: string,
      borderRadius: string,
      textAlign: CanvasTextAlign,
      transition: string
}

const ProgressBar = (props:propType) => {
    const { bgcolor, completed } = props;
  
    const containerStyles = {
      height: '6px',
      width: '100%',
      backgroundColor: "#e0e0de",
      borderRadius: 50,
    }
  
    const fillerStyles:fillerType = {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: bgcolor,
      borderRadius: 'inherit',
      textAlign: "right",
      transition: 'width 1s ease-in-out'
    }
  
    const labelStyles = {
      padding: 5,
      color: 'white',
      fontWeight: 'bold'
    }
  
    return (
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}></span>
        </div>
      </div>
    );
  };
  
  export default ProgressBar;