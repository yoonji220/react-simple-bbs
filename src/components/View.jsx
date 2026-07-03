import Button from "react-bootstrap/Button";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

export default function View() {
  const [content, setContent] = useState({
    name: "",
    title: "",
    content: "",
  });
  const { id } = useParams();
  useEffect(()=>{
    
  },[])

  return (
    <>
      <h2>글 제목</h2>
      <div className="d-flex justify-content-between">
        <p>글쓴이: </p>
        <p>날짜</p>
      </div>
      <hr />
      본문
      <hr />
      <div className="d-flex gap-1 justify-content-end">
        <Link to="/write" className="btn btn-primary">
          입력
        </Link>
        <Button variant="secondary">수정</Button>
        <Button variant="danger">삭제</Button>
      </div>
    </>
  );
}
