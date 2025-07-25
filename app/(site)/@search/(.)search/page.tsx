"use client";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import { BiSearch } from "react-icons/bi";

interface SearchFormValues {
  searchQuery: string;
  category: string;
}

export default function SearchModal() {
  const router = useRouter();
  const searchModalRef = useRef<HTMLDialogElement>(null);
  const {
    register,
    watch,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<SearchFormValues>({
    defaultValues: {
      searchQuery: "",
      category: "all",
    },
  });

  const onSubmit = (data: SearchFormValues) => {
    const { searchQuery, category } = data;
    const searchParams = new URLSearchParams();
    searchParams.set("query", searchQuery);
    searchParams.set("category", category);

    const resultUrl = `/result?${searchParams.toString()}`;

    console.log("Closing from onSubmit");
    if (searchModalRef.current) {
      console.log("Closing from onSubmit");
      searchModalRef.current.close();
    }
    router.push(resultUrl);
  };

  return (
    <dialog
      id="search-modal"
      className="modal modal-top bg-black/30 backdrop-blur-sm"
      open
      ref={searchModalRef}
    >
      <div className="modal-box max-w-2xl rounded-2xl mx-auto mt-32">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Category tabs */}
          <div className="flex flex-col gap-4 mt-4">
            <div role="tablist" className="tabs tabs-boxed gap-2">
              {["all", "videos", "courses", "blogs"].map((cat) => (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  className={cn(
                    "btn btn-sm btn-ghost tab",
                    watch("category") === cat && "tab-active"
                  )}
                  onClick={() => setValue("category", cat)}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>

            {/* Text input for search */}
            <div className="flex gap-2">
              <input
                type="text"
                className="input input-bordered w-full"
                autoFocus
                placeholder="videos, courses, blogs and more"
                {...register("searchQuery", { required: true })}
              />
              <button
                type="submit"
                className="btn btn-primary bottom-0 right-0"
              >
                <BiSearch size={20} />
              </button>
              {errors.searchQuery && (
                <p className="text-sm text-error">Please enter something 🥱.</p>
              )}
            </div>
          </div>
        </form>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button onClick={() => router.back()}>close</button>
      </form>
    </dialog>
  );
}
