import Form from "next/form";
import { Search } from "lucide-react";

import SearchFormReset from "@/components/SearchFormReset";
import { Button } from "@/components/ui/button";

const SearchForm = ({ query }: { query?: string }) => {
  return (
    <Form action="/" scroll={false} className="search-form">
      <div className="flex min-w-0 flex-1 items-center gap-3">
        <div className="hidden size-11 items-center justify-center rounded-2xl bg-secondary text-muted-foreground sm:flex">
          <Search className="size-5" />
        </div>

        <input
          name="query"
          defaultValue={query}
          className="search-input"
          placeholder="Search startups"
        />
      </div>

      <div className="flex items-center gap-2">
        {query ? <SearchFormReset /> : null}

        <Button type="submit" size="icon-lg" className="rounded-2xl">
          <Search className="size-5" />
          <span className="sr-only">Search startups</span>
        </Button>
      </div>
    </Form>
  );
};

export default SearchForm;
