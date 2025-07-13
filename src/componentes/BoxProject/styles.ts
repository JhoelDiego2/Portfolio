import styled from "styled-components"

export const Container = styled.div`
  margin: 0px auto;
  /* padding-bottom: 100px; */
  width: 100%;
    padding-inline: clamp(1rem, 5vw, 6rem);

`

export const CardContainer = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-top: 20px;
  margin-bottom: 40px;
  gap: 35px;
  min-height: 440px;
  flex-wrap: wrap;
  padding: 0 5px;
  align-items: flex-end;
`

export const Splash = styled.div`
  position: absolute;
  top: 140px;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(306deg,  #3d413edc 30%, #0fbab2ff 100%);
  border-radius: 20px;
`

export const CardContent = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  z-index: 10;
  position: relative;
  flex-wrap: wrap; 
  justify-content: center;
  padding: 70px 20px;
`

export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 250px;
  max-width: 400px;
  div{
    display: flex;
    flex-wrap: wrap;
    background-color: red;
    width: 100%;
    justify-content: center;
    row-gap: 10px;
  }
`

export const ProjectTitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
  color: #1f2937; 

  width: 100%;
  text-align: center;
`

export const ProjectDescription = styled.p`
  font-size: 16px;
  line-height: 1.5;
  font-weight: 400;
  color: #000000ff; 

`

export const Tag = styled.span`
  display: inline-block;
  padding: 4px 12px;
  margin-right: 8px;
  border-radius: 10px;
  background-color: #f3f4f6; 
  color: #111827; 
  font-size: 14px;
  font-weight: 500;
`

export const ProjectImage = styled.img`
  width: 400px;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  object-fit: cover;
`

export const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 16px;
`

export const Button = styled.a`
  padding: 10px 18px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 8px;
  text-decoration: none;
  color: white;
  background-color: #0ea5e9; /* sky-500 */
  transition: background-color 0.2s;

  &:hover {
    background-color: #0284c7; /* sky-600 */
  }

  &.secondary {
    background-color: #4b5563; /* gray-600 */

    &:hover {
      background-color: #374151; /* gray-700 */
    }
  }
`
export const Card = styled.div`
  width: 400px;
  height: auto;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
  img:hover {
    transform: scale(1.02);
  };
  height: 630px;
  background-color: black;
`
export const CardMobile = styled.div`
  width: 200px;
  height: auto;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
  img{
    width: 200px;
  }
  img:hover {
    transform: scale(1.02);
  };
  height: 630px;
  background-color: black;
  overflow: hidden;
`