import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model SimplePost
 *
 */
export type SimplePostModel = runtime.Types.Result.DefaultSelection<Prisma.$SimplePostPayload>;
export type AggregateSimplePost = {
    _count: SimplePostCountAggregateOutputType | null;
    _min: SimplePostMinAggregateOutputType | null;
    _max: SimplePostMaxAggregateOutputType | null;
};
export type SimplePostMinAggregateOutputType = {
    id: string | null;
    content: string | null;
    image: string | null;
    postId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SimplePostMaxAggregateOutputType = {
    id: string | null;
    content: string | null;
    image: string | null;
    postId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SimplePostCountAggregateOutputType = {
    id: number;
    content: number;
    image: number;
    postId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type SimplePostMinAggregateInputType = {
    id?: true;
    content?: true;
    image?: true;
    postId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SimplePostMaxAggregateInputType = {
    id?: true;
    content?: true;
    image?: true;
    postId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SimplePostCountAggregateInputType = {
    id?: true;
    content?: true;
    image?: true;
    postId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type SimplePostAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which SimplePost to aggregate.
     */
    where?: Prisma.SimplePostWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SimplePosts to fetch.
     */
    orderBy?: Prisma.SimplePostOrderByWithRelationInput | Prisma.SimplePostOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.SimplePostWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SimplePosts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SimplePosts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned SimplePosts
    **/
    _count?: true | SimplePostCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: SimplePostMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: SimplePostMaxAggregateInputType;
};
export type GetSimplePostAggregateType<T extends SimplePostAggregateArgs> = {
    [P in keyof T & keyof AggregateSimplePost]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSimplePost[P]> : Prisma.GetScalarType<T[P], AggregateSimplePost[P]>;
};
export type SimplePostGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SimplePostWhereInput;
    orderBy?: Prisma.SimplePostOrderByWithAggregationInput | Prisma.SimplePostOrderByWithAggregationInput[];
    by: Prisma.SimplePostScalarFieldEnum[] | Prisma.SimplePostScalarFieldEnum;
    having?: Prisma.SimplePostScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SimplePostCountAggregateInputType | true;
    _min?: SimplePostMinAggregateInputType;
    _max?: SimplePostMaxAggregateInputType;
};
export type SimplePostGroupByOutputType = {
    id: string;
    content: string;
    image: string | null;
    postId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: SimplePostCountAggregateOutputType | null;
    _min: SimplePostMinAggregateOutputType | null;
    _max: SimplePostMaxAggregateOutputType | null;
};
export type GetSimplePostGroupByPayload<T extends SimplePostGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SimplePostGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SimplePostGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SimplePostGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SimplePostGroupByOutputType[P]>;
}>>;
export type SimplePostWhereInput = {
    AND?: Prisma.SimplePostWhereInput | Prisma.SimplePostWhereInput[];
    OR?: Prisma.SimplePostWhereInput[];
    NOT?: Prisma.SimplePostWhereInput | Prisma.SimplePostWhereInput[];
    id?: Prisma.StringFilter<"SimplePost"> | string;
    content?: Prisma.StringFilter<"SimplePost"> | string;
    image?: Prisma.StringNullableFilter<"SimplePost"> | string | null;
    postId?: Prisma.StringFilter<"SimplePost"> | string;
    createdAt?: Prisma.DateTimeFilter<"SimplePost"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"SimplePost"> | Date | string;
    post?: Prisma.XOR<Prisma.PostScalarRelationFilter, Prisma.PostWhereInput>;
};
export type SimplePostOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    image?: Prisma.SortOrderInput | Prisma.SortOrder;
    postId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    post?: Prisma.PostOrderByWithRelationInput;
};
export type SimplePostWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    postId?: string;
    AND?: Prisma.SimplePostWhereInput | Prisma.SimplePostWhereInput[];
    OR?: Prisma.SimplePostWhereInput[];
    NOT?: Prisma.SimplePostWhereInput | Prisma.SimplePostWhereInput[];
    content?: Prisma.StringFilter<"SimplePost"> | string;
    image?: Prisma.StringNullableFilter<"SimplePost"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"SimplePost"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"SimplePost"> | Date | string;
    post?: Prisma.XOR<Prisma.PostScalarRelationFilter, Prisma.PostWhereInput>;
}, "id" | "postId">;
export type SimplePostOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    image?: Prisma.SortOrderInput | Prisma.SortOrder;
    postId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.SimplePostCountOrderByAggregateInput;
    _max?: Prisma.SimplePostMaxOrderByAggregateInput;
    _min?: Prisma.SimplePostMinOrderByAggregateInput;
};
export type SimplePostScalarWhereWithAggregatesInput = {
    AND?: Prisma.SimplePostScalarWhereWithAggregatesInput | Prisma.SimplePostScalarWhereWithAggregatesInput[];
    OR?: Prisma.SimplePostScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SimplePostScalarWhereWithAggregatesInput | Prisma.SimplePostScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"SimplePost"> | string;
    content?: Prisma.StringWithAggregatesFilter<"SimplePost"> | string;
    image?: Prisma.StringNullableWithAggregatesFilter<"SimplePost"> | string | null;
    postId?: Prisma.StringWithAggregatesFilter<"SimplePost"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"SimplePost"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"SimplePost"> | Date | string;
};
export type SimplePostCreateInput = {
    id?: string;
    content: string;
    image?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    post: Prisma.PostCreateNestedOneWithoutSimplePostInput;
};
export type SimplePostUncheckedCreateInput = {
    id?: string;
    content: string;
    image?: string | null;
    postId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SimplePostUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    post?: Prisma.PostUpdateOneRequiredWithoutSimplePostNestedInput;
};
export type SimplePostUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    postId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SimplePostCreateManyInput = {
    id?: string;
    content: string;
    image?: string | null;
    postId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SimplePostUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SimplePostUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    postId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SimplePostNullableScalarRelationFilter = {
    is?: Prisma.SimplePostWhereInput | null;
    isNot?: Prisma.SimplePostWhereInput | null;
};
export type SimplePostCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    postId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SimplePostMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    postId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SimplePostMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    postId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SimplePostCreateNestedOneWithoutPostInput = {
    create?: Prisma.XOR<Prisma.SimplePostCreateWithoutPostInput, Prisma.SimplePostUncheckedCreateWithoutPostInput>;
    connectOrCreate?: Prisma.SimplePostCreateOrConnectWithoutPostInput;
    connect?: Prisma.SimplePostWhereUniqueInput;
};
export type SimplePostUncheckedCreateNestedOneWithoutPostInput = {
    create?: Prisma.XOR<Prisma.SimplePostCreateWithoutPostInput, Prisma.SimplePostUncheckedCreateWithoutPostInput>;
    connectOrCreate?: Prisma.SimplePostCreateOrConnectWithoutPostInput;
    connect?: Prisma.SimplePostWhereUniqueInput;
};
export type SimplePostUpdateOneWithoutPostNestedInput = {
    create?: Prisma.XOR<Prisma.SimplePostCreateWithoutPostInput, Prisma.SimplePostUncheckedCreateWithoutPostInput>;
    connectOrCreate?: Prisma.SimplePostCreateOrConnectWithoutPostInput;
    upsert?: Prisma.SimplePostUpsertWithoutPostInput;
    disconnect?: Prisma.SimplePostWhereInput | boolean;
    delete?: Prisma.SimplePostWhereInput | boolean;
    connect?: Prisma.SimplePostWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SimplePostUpdateToOneWithWhereWithoutPostInput, Prisma.SimplePostUpdateWithoutPostInput>, Prisma.SimplePostUncheckedUpdateWithoutPostInput>;
};
export type SimplePostUncheckedUpdateOneWithoutPostNestedInput = {
    create?: Prisma.XOR<Prisma.SimplePostCreateWithoutPostInput, Prisma.SimplePostUncheckedCreateWithoutPostInput>;
    connectOrCreate?: Prisma.SimplePostCreateOrConnectWithoutPostInput;
    upsert?: Prisma.SimplePostUpsertWithoutPostInput;
    disconnect?: Prisma.SimplePostWhereInput | boolean;
    delete?: Prisma.SimplePostWhereInput | boolean;
    connect?: Prisma.SimplePostWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SimplePostUpdateToOneWithWhereWithoutPostInput, Prisma.SimplePostUpdateWithoutPostInput>, Prisma.SimplePostUncheckedUpdateWithoutPostInput>;
};
export type SimplePostCreateWithoutPostInput = {
    id?: string;
    content: string;
    image?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SimplePostUncheckedCreateWithoutPostInput = {
    id?: string;
    content: string;
    image?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SimplePostCreateOrConnectWithoutPostInput = {
    where: Prisma.SimplePostWhereUniqueInput;
    create: Prisma.XOR<Prisma.SimplePostCreateWithoutPostInput, Prisma.SimplePostUncheckedCreateWithoutPostInput>;
};
export type SimplePostUpsertWithoutPostInput = {
    update: Prisma.XOR<Prisma.SimplePostUpdateWithoutPostInput, Prisma.SimplePostUncheckedUpdateWithoutPostInput>;
    create: Prisma.XOR<Prisma.SimplePostCreateWithoutPostInput, Prisma.SimplePostUncheckedCreateWithoutPostInput>;
    where?: Prisma.SimplePostWhereInput;
};
export type SimplePostUpdateToOneWithWhereWithoutPostInput = {
    where?: Prisma.SimplePostWhereInput;
    data: Prisma.XOR<Prisma.SimplePostUpdateWithoutPostInput, Prisma.SimplePostUncheckedUpdateWithoutPostInput>;
};
export type SimplePostUpdateWithoutPostInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SimplePostUncheckedUpdateWithoutPostInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SimplePostSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    content?: boolean;
    image?: boolean;
    postId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    post?: boolean | Prisma.PostDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["simplePost"]>;
export type SimplePostSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    content?: boolean;
    image?: boolean;
    postId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    post?: boolean | Prisma.PostDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["simplePost"]>;
export type SimplePostSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    content?: boolean;
    image?: boolean;
    postId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    post?: boolean | Prisma.PostDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["simplePost"]>;
export type SimplePostSelectScalar = {
    id?: boolean;
    content?: boolean;
    image?: boolean;
    postId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type SimplePostOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "content" | "image" | "postId" | "createdAt" | "updatedAt", ExtArgs["result"]["simplePost"]>;
export type SimplePostInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    post?: boolean | Prisma.PostDefaultArgs<ExtArgs>;
};
export type SimplePostIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    post?: boolean | Prisma.PostDefaultArgs<ExtArgs>;
};
export type SimplePostIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    post?: boolean | Prisma.PostDefaultArgs<ExtArgs>;
};
export type $SimplePostPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "SimplePost";
    objects: {
        post: Prisma.$PostPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        content: string;
        image: string | null;
        postId: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["simplePost"]>;
    composites: {};
};
export type SimplePostGetPayload<S extends boolean | null | undefined | SimplePostDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SimplePostPayload, S>;
export type SimplePostCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SimplePostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SimplePostCountAggregateInputType | true;
};
export interface SimplePostDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['SimplePost'];
        meta: {
            name: 'SimplePost';
        };
    };
    /**
     * Find zero or one SimplePost that matches the filter.
     * @param {SimplePostFindUniqueArgs} args - Arguments to find a SimplePost
     * @example
     * // Get one SimplePost
     * const simplePost = await prisma.simplePost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SimplePostFindUniqueArgs>(args: Prisma.SelectSubset<T, SimplePostFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SimplePostClient<runtime.Types.Result.GetResult<Prisma.$SimplePostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one SimplePost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SimplePostFindUniqueOrThrowArgs} args - Arguments to find a SimplePost
     * @example
     * // Get one SimplePost
     * const simplePost = await prisma.simplePost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SimplePostFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SimplePostFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SimplePostClient<runtime.Types.Result.GetResult<Prisma.$SimplePostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first SimplePost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SimplePostFindFirstArgs} args - Arguments to find a SimplePost
     * @example
     * // Get one SimplePost
     * const simplePost = await prisma.simplePost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SimplePostFindFirstArgs>(args?: Prisma.SelectSubset<T, SimplePostFindFirstArgs<ExtArgs>>): Prisma.Prisma__SimplePostClient<runtime.Types.Result.GetResult<Prisma.$SimplePostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first SimplePost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SimplePostFindFirstOrThrowArgs} args - Arguments to find a SimplePost
     * @example
     * // Get one SimplePost
     * const simplePost = await prisma.simplePost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SimplePostFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SimplePostFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SimplePostClient<runtime.Types.Result.GetResult<Prisma.$SimplePostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more SimplePosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SimplePostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SimplePosts
     * const simplePosts = await prisma.simplePost.findMany()
     *
     * // Get first 10 SimplePosts
     * const simplePosts = await prisma.simplePost.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const simplePostWithIdOnly = await prisma.simplePost.findMany({ select: { id: true } })
     *
     */
    findMany<T extends SimplePostFindManyArgs>(args?: Prisma.SelectSubset<T, SimplePostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SimplePostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a SimplePost.
     * @param {SimplePostCreateArgs} args - Arguments to create a SimplePost.
     * @example
     * // Create one SimplePost
     * const SimplePost = await prisma.simplePost.create({
     *   data: {
     *     // ... data to create a SimplePost
     *   }
     * })
     *
     */
    create<T extends SimplePostCreateArgs>(args: Prisma.SelectSubset<T, SimplePostCreateArgs<ExtArgs>>): Prisma.Prisma__SimplePostClient<runtime.Types.Result.GetResult<Prisma.$SimplePostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many SimplePosts.
     * @param {SimplePostCreateManyArgs} args - Arguments to create many SimplePosts.
     * @example
     * // Create many SimplePosts
     * const simplePost = await prisma.simplePost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends SimplePostCreateManyArgs>(args?: Prisma.SelectSubset<T, SimplePostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many SimplePosts and returns the data saved in the database.
     * @param {SimplePostCreateManyAndReturnArgs} args - Arguments to create many SimplePosts.
     * @example
     * // Create many SimplePosts
     * const simplePost = await prisma.simplePost.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many SimplePosts and only return the `id`
     * const simplePostWithIdOnly = await prisma.simplePost.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends SimplePostCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SimplePostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SimplePostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a SimplePost.
     * @param {SimplePostDeleteArgs} args - Arguments to delete one SimplePost.
     * @example
     * // Delete one SimplePost
     * const SimplePost = await prisma.simplePost.delete({
     *   where: {
     *     // ... filter to delete one SimplePost
     *   }
     * })
     *
     */
    delete<T extends SimplePostDeleteArgs>(args: Prisma.SelectSubset<T, SimplePostDeleteArgs<ExtArgs>>): Prisma.Prisma__SimplePostClient<runtime.Types.Result.GetResult<Prisma.$SimplePostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one SimplePost.
     * @param {SimplePostUpdateArgs} args - Arguments to update one SimplePost.
     * @example
     * // Update one SimplePost
     * const simplePost = await prisma.simplePost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends SimplePostUpdateArgs>(args: Prisma.SelectSubset<T, SimplePostUpdateArgs<ExtArgs>>): Prisma.Prisma__SimplePostClient<runtime.Types.Result.GetResult<Prisma.$SimplePostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more SimplePosts.
     * @param {SimplePostDeleteManyArgs} args - Arguments to filter SimplePosts to delete.
     * @example
     * // Delete a few SimplePosts
     * const { count } = await prisma.simplePost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends SimplePostDeleteManyArgs>(args?: Prisma.SelectSubset<T, SimplePostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more SimplePosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SimplePostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SimplePosts
     * const simplePost = await prisma.simplePost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends SimplePostUpdateManyArgs>(args: Prisma.SelectSubset<T, SimplePostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more SimplePosts and returns the data updated in the database.
     * @param {SimplePostUpdateManyAndReturnArgs} args - Arguments to update many SimplePosts.
     * @example
     * // Update many SimplePosts
     * const simplePost = await prisma.simplePost.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more SimplePosts and only return the `id`
     * const simplePostWithIdOnly = await prisma.simplePost.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends SimplePostUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SimplePostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SimplePostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one SimplePost.
     * @param {SimplePostUpsertArgs} args - Arguments to update or create a SimplePost.
     * @example
     * // Update or create a SimplePost
     * const simplePost = await prisma.simplePost.upsert({
     *   create: {
     *     // ... data to create a SimplePost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SimplePost we want to update
     *   }
     * })
     */
    upsert<T extends SimplePostUpsertArgs>(args: Prisma.SelectSubset<T, SimplePostUpsertArgs<ExtArgs>>): Prisma.Prisma__SimplePostClient<runtime.Types.Result.GetResult<Prisma.$SimplePostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of SimplePosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SimplePostCountArgs} args - Arguments to filter SimplePosts to count.
     * @example
     * // Count the number of SimplePosts
     * const count = await prisma.simplePost.count({
     *   where: {
     *     // ... the filter for the SimplePosts we want to count
     *   }
     * })
    **/
    count<T extends SimplePostCountArgs>(args?: Prisma.Subset<T, SimplePostCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SimplePostCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a SimplePost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SimplePostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SimplePostAggregateArgs>(args: Prisma.Subset<T, SimplePostAggregateArgs>): Prisma.PrismaPromise<GetSimplePostAggregateType<T>>;
    /**
     * Group by SimplePost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SimplePostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends SimplePostGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SimplePostGroupByArgs['orderBy'];
    } : {
        orderBy?: SimplePostGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SimplePostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSimplePostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the SimplePost model
     */
    readonly fields: SimplePostFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for SimplePost.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__SimplePostClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    post<T extends Prisma.PostDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PostDefaultArgs<ExtArgs>>): Prisma.Prisma__PostClient<runtime.Types.Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the SimplePost model
 */
export interface SimplePostFieldRefs {
    readonly id: Prisma.FieldRef<"SimplePost", 'String'>;
    readonly content: Prisma.FieldRef<"SimplePost", 'String'>;
    readonly image: Prisma.FieldRef<"SimplePost", 'String'>;
    readonly postId: Prisma.FieldRef<"SimplePost", 'String'>;
    readonly createdAt: Prisma.FieldRef<"SimplePost", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"SimplePost", 'DateTime'>;
}
/**
 * SimplePost findUnique
 */
export type SimplePostFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SimplePost
     */
    select?: Prisma.SimplePostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SimplePost
     */
    omit?: Prisma.SimplePostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SimplePostInclude<ExtArgs> | null;
    /**
     * Filter, which SimplePost to fetch.
     */
    where: Prisma.SimplePostWhereUniqueInput;
};
/**
 * SimplePost findUniqueOrThrow
 */
export type SimplePostFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SimplePost
     */
    select?: Prisma.SimplePostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SimplePost
     */
    omit?: Prisma.SimplePostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SimplePostInclude<ExtArgs> | null;
    /**
     * Filter, which SimplePost to fetch.
     */
    where: Prisma.SimplePostWhereUniqueInput;
};
/**
 * SimplePost findFirst
 */
export type SimplePostFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SimplePost
     */
    select?: Prisma.SimplePostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SimplePost
     */
    omit?: Prisma.SimplePostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SimplePostInclude<ExtArgs> | null;
    /**
     * Filter, which SimplePost to fetch.
     */
    where?: Prisma.SimplePostWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SimplePosts to fetch.
     */
    orderBy?: Prisma.SimplePostOrderByWithRelationInput | Prisma.SimplePostOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for SimplePosts.
     */
    cursor?: Prisma.SimplePostWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SimplePosts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SimplePosts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SimplePosts.
     */
    distinct?: Prisma.SimplePostScalarFieldEnum | Prisma.SimplePostScalarFieldEnum[];
};
/**
 * SimplePost findFirstOrThrow
 */
export type SimplePostFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SimplePost
     */
    select?: Prisma.SimplePostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SimplePost
     */
    omit?: Prisma.SimplePostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SimplePostInclude<ExtArgs> | null;
    /**
     * Filter, which SimplePost to fetch.
     */
    where?: Prisma.SimplePostWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SimplePosts to fetch.
     */
    orderBy?: Prisma.SimplePostOrderByWithRelationInput | Prisma.SimplePostOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for SimplePosts.
     */
    cursor?: Prisma.SimplePostWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SimplePosts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SimplePosts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SimplePosts.
     */
    distinct?: Prisma.SimplePostScalarFieldEnum | Prisma.SimplePostScalarFieldEnum[];
};
/**
 * SimplePost findMany
 */
export type SimplePostFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SimplePost
     */
    select?: Prisma.SimplePostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SimplePost
     */
    omit?: Prisma.SimplePostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SimplePostInclude<ExtArgs> | null;
    /**
     * Filter, which SimplePosts to fetch.
     */
    where?: Prisma.SimplePostWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SimplePosts to fetch.
     */
    orderBy?: Prisma.SimplePostOrderByWithRelationInput | Prisma.SimplePostOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing SimplePosts.
     */
    cursor?: Prisma.SimplePostWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SimplePosts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SimplePosts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SimplePosts.
     */
    distinct?: Prisma.SimplePostScalarFieldEnum | Prisma.SimplePostScalarFieldEnum[];
};
/**
 * SimplePost create
 */
export type SimplePostCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SimplePost
     */
    select?: Prisma.SimplePostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SimplePost
     */
    omit?: Prisma.SimplePostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SimplePostInclude<ExtArgs> | null;
    /**
     * The data needed to create a SimplePost.
     */
    data: Prisma.XOR<Prisma.SimplePostCreateInput, Prisma.SimplePostUncheckedCreateInput>;
};
/**
 * SimplePost createMany
 */
export type SimplePostCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many SimplePosts.
     */
    data: Prisma.SimplePostCreateManyInput | Prisma.SimplePostCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * SimplePost createManyAndReturn
 */
export type SimplePostCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SimplePost
     */
    select?: Prisma.SimplePostSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the SimplePost
     */
    omit?: Prisma.SimplePostOmit<ExtArgs> | null;
    /**
     * The data used to create many SimplePosts.
     */
    data: Prisma.SimplePostCreateManyInput | Prisma.SimplePostCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SimplePostIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * SimplePost update
 */
export type SimplePostUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SimplePost
     */
    select?: Prisma.SimplePostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SimplePost
     */
    omit?: Prisma.SimplePostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SimplePostInclude<ExtArgs> | null;
    /**
     * The data needed to update a SimplePost.
     */
    data: Prisma.XOR<Prisma.SimplePostUpdateInput, Prisma.SimplePostUncheckedUpdateInput>;
    /**
     * Choose, which SimplePost to update.
     */
    where: Prisma.SimplePostWhereUniqueInput;
};
/**
 * SimplePost updateMany
 */
export type SimplePostUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update SimplePosts.
     */
    data: Prisma.XOR<Prisma.SimplePostUpdateManyMutationInput, Prisma.SimplePostUncheckedUpdateManyInput>;
    /**
     * Filter which SimplePosts to update
     */
    where?: Prisma.SimplePostWhereInput;
    /**
     * Limit how many SimplePosts to update.
     */
    limit?: number;
};
/**
 * SimplePost updateManyAndReturn
 */
export type SimplePostUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SimplePost
     */
    select?: Prisma.SimplePostSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the SimplePost
     */
    omit?: Prisma.SimplePostOmit<ExtArgs> | null;
    /**
     * The data used to update SimplePosts.
     */
    data: Prisma.XOR<Prisma.SimplePostUpdateManyMutationInput, Prisma.SimplePostUncheckedUpdateManyInput>;
    /**
     * Filter which SimplePosts to update
     */
    where?: Prisma.SimplePostWhereInput;
    /**
     * Limit how many SimplePosts to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SimplePostIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * SimplePost upsert
 */
export type SimplePostUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SimplePost
     */
    select?: Prisma.SimplePostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SimplePost
     */
    omit?: Prisma.SimplePostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SimplePostInclude<ExtArgs> | null;
    /**
     * The filter to search for the SimplePost to update in case it exists.
     */
    where: Prisma.SimplePostWhereUniqueInput;
    /**
     * In case the SimplePost found by the `where` argument doesn't exist, create a new SimplePost with this data.
     */
    create: Prisma.XOR<Prisma.SimplePostCreateInput, Prisma.SimplePostUncheckedCreateInput>;
    /**
     * In case the SimplePost was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.SimplePostUpdateInput, Prisma.SimplePostUncheckedUpdateInput>;
};
/**
 * SimplePost delete
 */
export type SimplePostDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SimplePost
     */
    select?: Prisma.SimplePostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SimplePost
     */
    omit?: Prisma.SimplePostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SimplePostInclude<ExtArgs> | null;
    /**
     * Filter which SimplePost to delete.
     */
    where: Prisma.SimplePostWhereUniqueInput;
};
/**
 * SimplePost deleteMany
 */
export type SimplePostDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which SimplePosts to delete
     */
    where?: Prisma.SimplePostWhereInput;
    /**
     * Limit how many SimplePosts to delete.
     */
    limit?: number;
};
/**
 * SimplePost without action
 */
export type SimplePostDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SimplePost
     */
    select?: Prisma.SimplePostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SimplePost
     */
    omit?: Prisma.SimplePostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SimplePostInclude<ExtArgs> | null;
};
//# sourceMappingURL=SimplePost.d.ts.map