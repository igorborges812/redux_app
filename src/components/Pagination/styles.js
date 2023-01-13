import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .MuiPagination-ul {
    li {
      button {
        background: #e5e4e6;
        border-color: #e5e4e6;
        /* border-radius: 7px; */
        color: #979797;
      }

      .MuiPaginationItem-page.Mui-selected {
        background: #249cf2;
        border-color: #249cf2;
        color: #fff;
      }
    }
  }
`
