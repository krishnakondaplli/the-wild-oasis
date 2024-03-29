import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { updateCurrentUser } from "../../services/apiAuth.js";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: (data) => {
      toast.success(" user account  successfully update ");
      queryClient.setQueryData(["user"], data.user);
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },
    onErrorr: (err) => toast.error(err.message),
  });
  return { updateUser, isUpdating };
}
