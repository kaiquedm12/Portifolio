import styled from "@emotion/styled"

const StyledButton = () => {
    
    const StyledButton = styled("button")(({theme}) => ({
        backgroundColor: "transparent",
        border: `1px solid ${theme.palette.primary.contrastText}`,
        borderRadius: "3px",
        padding: "5px 13px",
        width: "100%",
        color: theme.palette.primary.contrastText,
        '&:hover':{
            backgroundColor: theme.palette.secondary.contrastText,
        }
    }))

    return (
      <>
        <StyledButton>texto</StyledButton>
        
      </>
    )
  }
  
  export default StyledButton
  