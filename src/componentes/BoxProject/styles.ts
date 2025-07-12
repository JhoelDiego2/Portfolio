import styled from "styled-components"

export const Container = styled.div`
  margin: 100px auto;
  max-width: 1000px;
  padding-bottom: 100px;
  width: 100%;
`

export const CardContainer = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-top: 20px;
  margin-bottom: 40px;
`

export const Splash = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(306deg, #22c55e, #16a34a);
  border-radius: 20px;
`

export const CardContent = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  z-index: 10;
  position: relative;
`

export const FruitInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 250px;
`

export const FruitName = styled.div`
  font-size: 48px;
  font-weight: 600;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`

export const FruitDescription = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.4;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
`

export const Card = styled.div`
  font-size: 164px;
  width: 600px;
  height: 530px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background: var(--white);
  box-shadow: 
    0 0 1px hsl(0deg 0% 0% / 0.075),
    0 0 2px hsl(0deg 0% 0% / 0.075),
    0 0 4px hsl(0deg 0% 0% / 0.075),
    0 0 8px hsl(0deg 0% 0% / 0.075),
    0 0 16px hsl(0deg 0% 0% / 0.075);
  transform-origin: 50% 50%;
`

export const FruitEmoji = styled.div`
  font-size: 164px;
`