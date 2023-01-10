import styled from 'styled-components'

export const ContainerProduct = styled.div`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  margin: 8px;

  /* position: relative; */
  width: 266px;

  background: #ffffff;

  border: 1px solid #e5e4e6;
  border-radius: 7px;
`
export const ImgProduct = styled.img`
  width: 90px;
  height: 90px;
  left: 88px;
  top: 16px;

  border-radius: 7px;
`
export const TituloProduct = styled.div`
  font-family: 'Gordita';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  margin-top: 8px;

  text-align: center;

  color: #6d5d7a;
`
export const SpanProduct = styled.div`
  font-family: 'Gordita';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 150%;
  margin-top: 8px;

  text-align: center;

  color: #979797;
`
export const SpanPrice = styled.div`
  font-family: 'Gordita';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  margin-top: 9px;

  text-align: center;

  color: #55b84b;
`
