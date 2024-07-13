import { comments } from "../data";
import { redirect } from "next/navigation";

export const GET = async (
  _request: Request,
  { params: { id } }: { params: { id: string } }
) => {
  if(parseInt(id) > comments.length ) redirect('/comments')
  const comment = comments.find((comment) => (comment.id = parseInt(id)));

  return Response.json(comment);
};

export const PATCH = async (
  request: Request,
  { params: { id } }: { params: { id: string } }
) => {
  const body = await request.json();
  const { text } = body;
  const index = comments.findIndex((comment) => comment.id === parseInt(id));
  if (index) {
    comments[index].text = text;
    return Response.json(comments[index]);
  }
};



export const DELETE = async ( 
    _request : Request , 
    { params : { id }}: { params : { id : string }}) => {
        const index = comments.findIndex(comment => comment.id === parseInt(id) );
        const deletedComment = comments.splice(index,1);
        return Response.json(deletedComment);
}
