import Button from "react-bootstrap/Button";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

export default function View() {
  const [content, setContent] = useState({
    writer: "",
    title: "",
    content: "",
    date: "",
  });
  const [isError, setIsError] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:3000/view?id=${id}`)
      .then(response => {
        console.log(response.data); //[{...}] 객체가 배열에 감싸져서 들어옴
        // setContent(response.data);
        // data가 없거나 data의 배열의 개수가 0과 같다면
        if (!response.data || response.data.length === 0) {
          setIsError(true);
          return;
        }
        const data = response.data[0];
        setContent({
          writer: data.writer,
          title: data.title,
          content: data.content,
          date: data.date,
        });
      })
      .catch(error => {
        console.error(error);
        setIsError(true);
      })
      .finally(() => {
        console.log("요청완료");
      });
  }, [id]);
  if (isError) {
    return (
      <div className="text-center mt-5">
        <h3>잘못된 접근입니다.</h3>
        <p>다시 확인해주세요.</p>
        <Link to="/" className="btn btn-primary mt-3">
          홈으로 이동
        </Link>
      </div>
    );
  }

  return (
    <>
      <h2>{content.title}</h2>
      <div className="d-flex justify-content-between">
        <p>글쓴이: {content.writer}</p>
        <p>{content.date}</p>
      </div>
      <hr />
      {content.content}
      <hr />
      <div className="d-flex gap-1 justify-content-end">
        <Link to="/" className="btn btn-primary">
          홈
        </Link>
        <Button variant="secondary">수정</Button>
        <Button variant="danger">삭제</Button>
      </div>
    </>
  );
}
