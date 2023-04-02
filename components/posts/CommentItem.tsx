import { useCallback, useMemo } from "react";
import { useRouter } from "next/router";
import { formatDistanceToNowStrict } from "date-fns";
import Avatar from "../Avatar";

interface CommentItemProps {
  data: Record<string, any>;
}
const CommentItem: React.FC<CommentItemProps> = ({ data }) => {
  const router = useRouter();

  const goToUser = useCallback(
    (event: any) => {
      event.stopPropagation();
      router.push(`/users/${data.userId}`);
    },
    [router, data.userId]
  );

  const createdAt = useMemo(() => {
    if (!data.createdAt) {
      return null;
    }

    return formatDistanceToNowStrict(new Date(data.createdAt));
  }, [data?.createdAt]);

  return (
    <div className="border-b-[1px] border-neutral-800 p-5 cursor-pointer hover:bg-neutral-900 transition">
      <div className="flex flex-row gap-4 items-start">
        <Avatar userId={data.userId} />
        <div>
          <div className="flex flex-row gap-2 items-center">
            <p
              onClick={goToUser}
              className="text-white font-semibold cursor-pointer hover:underline"
            >
              {data.user.name}
            </p>
            <span className="text-neutral-500 cursor-pointer hover:underline hidden md:block">
              @{data.user.username}
            </span>
            <span className="text-sm text-neutral-500">{createdAt}</span>
          </div>
          <div className="text-white mt-1">{data.body}</div>
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
