import BoardListBody from "./body";

const BoardListPage = async ({ params }: { params: Promise<{ boardId: string }> }) => {
  const { boardId } = await params;

  return <BoardListBody boardId={boardId} />;
};

export default BoardListPage;
