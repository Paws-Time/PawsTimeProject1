import BoardDetailBody from "./body";

const BoardDetailPage = async ({
  params,
}: {
    params: Promise<{ boardId: string; postId: string }>;
}) => {
  const { boardId, postId } = await params;

  return (
    <div>
      <BoardDetailBody boardId={boardId} postId={postId} />
    </div>
  );
};

export default BoardDetailPage;
