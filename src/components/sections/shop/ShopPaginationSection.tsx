import React from 'react'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

function ShopPaginationSection() {
  return (
    <section>
      <Pagination>
      <PaginationContent className='flex gap-[38px]'>
        <PaginationItem className='h-[60px] w-[60px]'>
          <PaginationLink href="/shop?page=1" isActive>1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="/shop?page=2">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="/shop?page=3">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="/shop?type=next" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
    </section>
  )
}

export default ShopPaginationSection