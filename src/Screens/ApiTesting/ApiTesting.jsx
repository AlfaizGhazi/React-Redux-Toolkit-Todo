import * as React from "react";
import {
  StyledDiv,
  StyledTable,
  StyledThead,
  StyledTbody,
  StyledTr,
  StyledTh,
  StyledTd,
} from "../../Utils";

export const ApiTesting = (props) => {
  const { isDarkMode } = props;
  const [apiData, setApiData] = React.useState([]);

  const triggeredAPI = async () => {
    try {
      const responseAPI = await fetch("https://reqres.in/api/users?page=1");
      const responseJSON = await responseAPI?.json();
      const dataAPI = await responseJSON.data;
      setApiData(dataAPI);
    } catch (error) {
      alert(error.message);
    }
  };

  React.useEffect(() => {
    triggeredAPI();
  }, []);
  return (
    <StyledDiv
      className="apitesting--wrapper container text-center my-2"
      isDarkMode={isDarkMode}
    >
      <StyledTable className="table table-bordered" isDarkMode={isDarkMode}>
        <StyledThead isDarkMode={isDarkMode}>
          <StyledTr isDarkMode={isDarkMode}>
            <StyledTh scope="col">ID</StyledTh>
            <StyledTh scope="col">FIRST NAME</StyledTh>
            <StyledTh scope="col">LAST NAME</StyledTh>
            <StyledTh scope="col">EMAIL</StyledTh>
            <StyledTh scope="col">AVATAR</StyledTh>
          </StyledTr>
        </StyledThead>
        <StyledTbody isDarkMode={isDarkMode}>
          {apiData?.map((item) => {
            return (
              <StyledTr key={item.id}>
                <StyledTh scope="row">{item.id}</StyledTh>
                <StyledTd>{item.first_name}</StyledTd>
                <StyledTd>{item.last_name}</StyledTd>
                <StyledTd>{item.email}</StyledTd>
                <StyledTd>
                  <img src={item.avatar} alt={item.avatar} />
                </StyledTd>
              </StyledTr>
            );
          })}
        </StyledTbody>
      </StyledTable>
    </StyledDiv>
  );
};
