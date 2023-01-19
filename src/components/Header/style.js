import styled from 'styled-components'

export const Navbar = styled.div`
  background-color: #f7f9fc;
  height: 96px;
`
export const ImgLogo = styled.img`
  margin-top: 34.97px;
  margin-left: 35px;
  float: left;
`
export const Dashboard = styled.div`
  margin-left: 150.4px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #249cf2;
  float: left;
  margin-top: 38px;

  .Dashboard:before {
    content: '';
    position: absolute;
    height: 3px;
    width: 67px;
    top: 92px;
    background-color: #249cf2;
  }
`
export const CartLogo = styled.div`
  display: flex;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background-color: #ffff;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.1);
  float: right;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
  margin-right: 16px;
`
export const ImgPerfil = styled.img`
  display: flex;
  float: right;
  margin-top: 24px;
  align-items: center;
  justify-content: center;
  margin-right: 79px;
`
export const Seta = styled.div`
  margin-left: 11.33px;
  color: #8a8a8c;
  transform: rotate(90deg);
`
// *{
//   margin: 0;
//   padding: 0;
// }
