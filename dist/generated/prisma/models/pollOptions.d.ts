import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model pollOptions
 *
 */
export type pollOptionsModel = runtime.Types.Result.DefaultSelection<Prisma.$pollOptionsPayload>;
export type AggregatePollOptions = {
    _count: PollOptionsCountAggregateOutputType | null;
    _min: PollOptionsMinAggregateOutputType | null;
    _max: PollOptionsMaxAggregateOutputType | null;
};
export type PollOptionsMinAggregateOutputType = {
    id: string | null;
    option: string | null;
    pollId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PollOptionsMaxAggregateOutputType = {
    id: string | null;
    option: string | null;
    pollId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PollOptionsCountAggregateOutputType = {
    id: number;
    option: number;
    pollId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type PollOptionsMinAggregateInputType = {
    id?: true;
    option?: true;
    pollId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PollOptionsMaxAggregateInputType = {
    id?: true;
    option?: true;
    pollId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PollOptionsCountAggregateInputType = {
    id?: true;
    option?: true;
    pollId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type PollOptionsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which pollOptions to aggregate.
     */
    where?: Prisma.pollOptionsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of pollOptions to fetch.
     */
    orderBy?: Prisma.pollOptionsOrderByWithRelationInput | Prisma.pollOptionsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.pollOptionsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` pollOptions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` pollOptions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned pollOptions
    **/
    _count?: true | PollOptionsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: PollOptionsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: PollOptionsMaxAggregateInputType;
};
export type GetPollOptionsAggregateType<T extends PollOptionsAggregateArgs> = {
    [P in keyof T & keyof AggregatePollOptions]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePollOptions[P]> : Prisma.GetScalarType<T[P], AggregatePollOptions[P]>;
};
export type pollOptionsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.pollOptionsWhereInput;
    orderBy?: Prisma.pollOptionsOrderByWithAggregationInput | Prisma.pollOptionsOrderByWithAggregationInput[];
    by: Prisma.PollOptionsScalarFieldEnum[] | Prisma.PollOptionsScalarFieldEnum;
    having?: Prisma.pollOptionsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PollOptionsCountAggregateInputType | true;
    _min?: PollOptionsMinAggregateInputType;
    _max?: PollOptionsMaxAggregateInputType;
};
export type PollOptionsGroupByOutputType = {
    id: string;
    option: string;
    pollId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: PollOptionsCountAggregateOutputType | null;
    _min: PollOptionsMinAggregateOutputType | null;
    _max: PollOptionsMaxAggregateOutputType | null;
};
export type GetPollOptionsGroupByPayload<T extends pollOptionsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PollOptionsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PollOptionsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PollOptionsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PollOptionsGroupByOutputType[P]>;
}>>;
export type pollOptionsWhereInput = {
    AND?: Prisma.pollOptionsWhereInput | Prisma.pollOptionsWhereInput[];
    OR?: Prisma.pollOptionsWhereInput[];
    NOT?: Prisma.pollOptionsWhereInput | Prisma.pollOptionsWhereInput[];
    id?: Prisma.StringFilter<"pollOptions"> | string;
    option?: Prisma.StringFilter<"pollOptions"> | string;
    pollId?: Prisma.StringFilter<"pollOptions"> | string;
    createdAt?: Prisma.DateTimeFilter<"pollOptions"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"pollOptions"> | Date | string;
    poll?: Prisma.XOR<Prisma.PollScalarRelationFilter, Prisma.PollWhereInput>;
};
export type pollOptionsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    option?: Prisma.SortOrder;
    pollId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    poll?: Prisma.PollOrderByWithRelationInput;
};
export type pollOptionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.pollOptionsWhereInput | Prisma.pollOptionsWhereInput[];
    OR?: Prisma.pollOptionsWhereInput[];
    NOT?: Prisma.pollOptionsWhereInput | Prisma.pollOptionsWhereInput[];
    option?: Prisma.StringFilter<"pollOptions"> | string;
    pollId?: Prisma.StringFilter<"pollOptions"> | string;
    createdAt?: Prisma.DateTimeFilter<"pollOptions"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"pollOptions"> | Date | string;
    poll?: Prisma.XOR<Prisma.PollScalarRelationFilter, Prisma.PollWhereInput>;
}, "id">;
export type pollOptionsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    option?: Prisma.SortOrder;
    pollId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.pollOptionsCountOrderByAggregateInput;
    _max?: Prisma.pollOptionsMaxOrderByAggregateInput;
    _min?: Prisma.pollOptionsMinOrderByAggregateInput;
};
export type pollOptionsScalarWhereWithAggregatesInput = {
    AND?: Prisma.pollOptionsScalarWhereWithAggregatesInput | Prisma.pollOptionsScalarWhereWithAggregatesInput[];
    OR?: Prisma.pollOptionsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.pollOptionsScalarWhereWithAggregatesInput | Prisma.pollOptionsScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"pollOptions"> | string;
    option?: Prisma.StringWithAggregatesFilter<"pollOptions"> | string;
    pollId?: Prisma.StringWithAggregatesFilter<"pollOptions"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"pollOptions"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"pollOptions"> | Date | string;
};
export type pollOptionsCreateInput = {
    id?: string;
    option: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    poll: Prisma.PollCreateNestedOneWithoutPollOptionsInput;
};
export type pollOptionsUncheckedCreateInput = {
    id?: string;
    option: string;
    pollId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type pollOptionsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    option?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    poll?: Prisma.PollUpdateOneRequiredWithoutPollOptionsNestedInput;
};
export type pollOptionsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    option?: Prisma.StringFieldUpdateOperationsInput | string;
    pollId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type pollOptionsCreateManyInput = {
    id?: string;
    option: string;
    pollId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type pollOptionsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    option?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type pollOptionsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    option?: Prisma.StringFieldUpdateOperationsInput | string;
    pollId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PollOptionsListRelationFilter = {
    every?: Prisma.pollOptionsWhereInput;
    some?: Prisma.pollOptionsWhereInput;
    none?: Prisma.pollOptionsWhereInput;
};
export type pollOptionsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type pollOptionsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    option?: Prisma.SortOrder;
    pollId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type pollOptionsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    option?: Prisma.SortOrder;
    pollId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type pollOptionsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    option?: Prisma.SortOrder;
    pollId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type pollOptionsCreateNestedManyWithoutPollInput = {
    create?: Prisma.XOR<Prisma.pollOptionsCreateWithoutPollInput, Prisma.pollOptionsUncheckedCreateWithoutPollInput> | Prisma.pollOptionsCreateWithoutPollInput[] | Prisma.pollOptionsUncheckedCreateWithoutPollInput[];
    connectOrCreate?: Prisma.pollOptionsCreateOrConnectWithoutPollInput | Prisma.pollOptionsCreateOrConnectWithoutPollInput[];
    createMany?: Prisma.pollOptionsCreateManyPollInputEnvelope;
    connect?: Prisma.pollOptionsWhereUniqueInput | Prisma.pollOptionsWhereUniqueInput[];
};
export type pollOptionsUncheckedCreateNestedManyWithoutPollInput = {
    create?: Prisma.XOR<Prisma.pollOptionsCreateWithoutPollInput, Prisma.pollOptionsUncheckedCreateWithoutPollInput> | Prisma.pollOptionsCreateWithoutPollInput[] | Prisma.pollOptionsUncheckedCreateWithoutPollInput[];
    connectOrCreate?: Prisma.pollOptionsCreateOrConnectWithoutPollInput | Prisma.pollOptionsCreateOrConnectWithoutPollInput[];
    createMany?: Prisma.pollOptionsCreateManyPollInputEnvelope;
    connect?: Prisma.pollOptionsWhereUniqueInput | Prisma.pollOptionsWhereUniqueInput[];
};
export type pollOptionsUpdateManyWithoutPollNestedInput = {
    create?: Prisma.XOR<Prisma.pollOptionsCreateWithoutPollInput, Prisma.pollOptionsUncheckedCreateWithoutPollInput> | Prisma.pollOptionsCreateWithoutPollInput[] | Prisma.pollOptionsUncheckedCreateWithoutPollInput[];
    connectOrCreate?: Prisma.pollOptionsCreateOrConnectWithoutPollInput | Prisma.pollOptionsCreateOrConnectWithoutPollInput[];
    upsert?: Prisma.pollOptionsUpsertWithWhereUniqueWithoutPollInput | Prisma.pollOptionsUpsertWithWhereUniqueWithoutPollInput[];
    createMany?: Prisma.pollOptionsCreateManyPollInputEnvelope;
    set?: Prisma.pollOptionsWhereUniqueInput | Prisma.pollOptionsWhereUniqueInput[];
    disconnect?: Prisma.pollOptionsWhereUniqueInput | Prisma.pollOptionsWhereUniqueInput[];
    delete?: Prisma.pollOptionsWhereUniqueInput | Prisma.pollOptionsWhereUniqueInput[];
    connect?: Prisma.pollOptionsWhereUniqueInput | Prisma.pollOptionsWhereUniqueInput[];
    update?: Prisma.pollOptionsUpdateWithWhereUniqueWithoutPollInput | Prisma.pollOptionsUpdateWithWhereUniqueWithoutPollInput[];
    updateMany?: Prisma.pollOptionsUpdateManyWithWhereWithoutPollInput | Prisma.pollOptionsUpdateManyWithWhereWithoutPollInput[];
    deleteMany?: Prisma.pollOptionsScalarWhereInput | Prisma.pollOptionsScalarWhereInput[];
};
export type pollOptionsUncheckedUpdateManyWithoutPollNestedInput = {
    create?: Prisma.XOR<Prisma.pollOptionsCreateWithoutPollInput, Prisma.pollOptionsUncheckedCreateWithoutPollInput> | Prisma.pollOptionsCreateWithoutPollInput[] | Prisma.pollOptionsUncheckedCreateWithoutPollInput[];
    connectOrCreate?: Prisma.pollOptionsCreateOrConnectWithoutPollInput | Prisma.pollOptionsCreateOrConnectWithoutPollInput[];
    upsert?: Prisma.pollOptionsUpsertWithWhereUniqueWithoutPollInput | Prisma.pollOptionsUpsertWithWhereUniqueWithoutPollInput[];
    createMany?: Prisma.pollOptionsCreateManyPollInputEnvelope;
    set?: Prisma.pollOptionsWhereUniqueInput | Prisma.pollOptionsWhereUniqueInput[];
    disconnect?: Prisma.pollOptionsWhereUniqueInput | Prisma.pollOptionsWhereUniqueInput[];
    delete?: Prisma.pollOptionsWhereUniqueInput | Prisma.pollOptionsWhereUniqueInput[];
    connect?: Prisma.pollOptionsWhereUniqueInput | Prisma.pollOptionsWhereUniqueInput[];
    update?: Prisma.pollOptionsUpdateWithWhereUniqueWithoutPollInput | Prisma.pollOptionsUpdateWithWhereUniqueWithoutPollInput[];
    updateMany?: Prisma.pollOptionsUpdateManyWithWhereWithoutPollInput | Prisma.pollOptionsUpdateManyWithWhereWithoutPollInput[];
    deleteMany?: Prisma.pollOptionsScalarWhereInput | Prisma.pollOptionsScalarWhereInput[];
};
export type pollOptionsCreateWithoutPollInput = {
    id?: string;
    option: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type pollOptionsUncheckedCreateWithoutPollInput = {
    id?: string;
    option: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type pollOptionsCreateOrConnectWithoutPollInput = {
    where: Prisma.pollOptionsWhereUniqueInput;
    create: Prisma.XOR<Prisma.pollOptionsCreateWithoutPollInput, Prisma.pollOptionsUncheckedCreateWithoutPollInput>;
};
export type pollOptionsCreateManyPollInputEnvelope = {
    data: Prisma.pollOptionsCreateManyPollInput | Prisma.pollOptionsCreateManyPollInput[];
    skipDuplicates?: boolean;
};
export type pollOptionsUpsertWithWhereUniqueWithoutPollInput = {
    where: Prisma.pollOptionsWhereUniqueInput;
    update: Prisma.XOR<Prisma.pollOptionsUpdateWithoutPollInput, Prisma.pollOptionsUncheckedUpdateWithoutPollInput>;
    create: Prisma.XOR<Prisma.pollOptionsCreateWithoutPollInput, Prisma.pollOptionsUncheckedCreateWithoutPollInput>;
};
export type pollOptionsUpdateWithWhereUniqueWithoutPollInput = {
    where: Prisma.pollOptionsWhereUniqueInput;
    data: Prisma.XOR<Prisma.pollOptionsUpdateWithoutPollInput, Prisma.pollOptionsUncheckedUpdateWithoutPollInput>;
};
export type pollOptionsUpdateManyWithWhereWithoutPollInput = {
    where: Prisma.pollOptionsScalarWhereInput;
    data: Prisma.XOR<Prisma.pollOptionsUpdateManyMutationInput, Prisma.pollOptionsUncheckedUpdateManyWithoutPollInput>;
};
export type pollOptionsScalarWhereInput = {
    AND?: Prisma.pollOptionsScalarWhereInput | Prisma.pollOptionsScalarWhereInput[];
    OR?: Prisma.pollOptionsScalarWhereInput[];
    NOT?: Prisma.pollOptionsScalarWhereInput | Prisma.pollOptionsScalarWhereInput[];
    id?: Prisma.StringFilter<"pollOptions"> | string;
    option?: Prisma.StringFilter<"pollOptions"> | string;
    pollId?: Prisma.StringFilter<"pollOptions"> | string;
    createdAt?: Prisma.DateTimeFilter<"pollOptions"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"pollOptions"> | Date | string;
};
export type pollOptionsCreateManyPollInput = {
    id?: string;
    option: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type pollOptionsUpdateWithoutPollInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    option?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type pollOptionsUncheckedUpdateWithoutPollInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    option?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type pollOptionsUncheckedUpdateManyWithoutPollInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    option?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type pollOptionsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    option?: boolean;
    pollId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    poll?: boolean | Prisma.PollDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pollOptions"]>;
export type pollOptionsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    option?: boolean;
    pollId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    poll?: boolean | Prisma.PollDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pollOptions"]>;
export type pollOptionsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    option?: boolean;
    pollId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    poll?: boolean | Prisma.PollDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pollOptions"]>;
export type pollOptionsSelectScalar = {
    id?: boolean;
    option?: boolean;
    pollId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type pollOptionsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "option" | "pollId" | "createdAt" | "updatedAt", ExtArgs["result"]["pollOptions"]>;
export type pollOptionsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    poll?: boolean | Prisma.PollDefaultArgs<ExtArgs>;
};
export type pollOptionsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    poll?: boolean | Prisma.PollDefaultArgs<ExtArgs>;
};
export type pollOptionsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    poll?: boolean | Prisma.PollDefaultArgs<ExtArgs>;
};
export type $pollOptionsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "pollOptions";
    objects: {
        poll: Prisma.$PollPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        option: string;
        pollId: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["pollOptions"]>;
    composites: {};
};
export type pollOptionsGetPayload<S extends boolean | null | undefined | pollOptionsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$pollOptionsPayload, S>;
export type pollOptionsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<pollOptionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PollOptionsCountAggregateInputType | true;
};
export interface pollOptionsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['pollOptions'];
        meta: {
            name: 'pollOptions';
        };
    };
    /**
     * Find zero or one PollOptions that matches the filter.
     * @param {pollOptionsFindUniqueArgs} args - Arguments to find a PollOptions
     * @example
     * // Get one PollOptions
     * const pollOptions = await prisma.pollOptions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pollOptionsFindUniqueArgs>(args: Prisma.SelectSubset<T, pollOptionsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__pollOptionsClient<runtime.Types.Result.GetResult<Prisma.$pollOptionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one PollOptions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {pollOptionsFindUniqueOrThrowArgs} args - Arguments to find a PollOptions
     * @example
     * // Get one PollOptions
     * const pollOptions = await prisma.pollOptions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pollOptionsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, pollOptionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__pollOptionsClient<runtime.Types.Result.GetResult<Prisma.$pollOptionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first PollOptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pollOptionsFindFirstArgs} args - Arguments to find a PollOptions
     * @example
     * // Get one PollOptions
     * const pollOptions = await prisma.pollOptions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pollOptionsFindFirstArgs>(args?: Prisma.SelectSubset<T, pollOptionsFindFirstArgs<ExtArgs>>): Prisma.Prisma__pollOptionsClient<runtime.Types.Result.GetResult<Prisma.$pollOptionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first PollOptions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pollOptionsFindFirstOrThrowArgs} args - Arguments to find a PollOptions
     * @example
     * // Get one PollOptions
     * const pollOptions = await prisma.pollOptions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pollOptionsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, pollOptionsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__pollOptionsClient<runtime.Types.Result.GetResult<Prisma.$pollOptionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more PollOptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pollOptionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PollOptions
     * const pollOptions = await prisma.pollOptions.findMany()
     *
     * // Get first 10 PollOptions
     * const pollOptions = await prisma.pollOptions.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const pollOptionsWithIdOnly = await prisma.pollOptions.findMany({ select: { id: true } })
     *
     */
    findMany<T extends pollOptionsFindManyArgs>(args?: Prisma.SelectSubset<T, pollOptionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$pollOptionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a PollOptions.
     * @param {pollOptionsCreateArgs} args - Arguments to create a PollOptions.
     * @example
     * // Create one PollOptions
     * const PollOptions = await prisma.pollOptions.create({
     *   data: {
     *     // ... data to create a PollOptions
     *   }
     * })
     *
     */
    create<T extends pollOptionsCreateArgs>(args: Prisma.SelectSubset<T, pollOptionsCreateArgs<ExtArgs>>): Prisma.Prisma__pollOptionsClient<runtime.Types.Result.GetResult<Prisma.$pollOptionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many PollOptions.
     * @param {pollOptionsCreateManyArgs} args - Arguments to create many PollOptions.
     * @example
     * // Create many PollOptions
     * const pollOptions = await prisma.pollOptions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends pollOptionsCreateManyArgs>(args?: Prisma.SelectSubset<T, pollOptionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many PollOptions and returns the data saved in the database.
     * @param {pollOptionsCreateManyAndReturnArgs} args - Arguments to create many PollOptions.
     * @example
     * // Create many PollOptions
     * const pollOptions = await prisma.pollOptions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many PollOptions and only return the `id`
     * const pollOptionsWithIdOnly = await prisma.pollOptions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends pollOptionsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, pollOptionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$pollOptionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a PollOptions.
     * @param {pollOptionsDeleteArgs} args - Arguments to delete one PollOptions.
     * @example
     * // Delete one PollOptions
     * const PollOptions = await prisma.pollOptions.delete({
     *   where: {
     *     // ... filter to delete one PollOptions
     *   }
     * })
     *
     */
    delete<T extends pollOptionsDeleteArgs>(args: Prisma.SelectSubset<T, pollOptionsDeleteArgs<ExtArgs>>): Prisma.Prisma__pollOptionsClient<runtime.Types.Result.GetResult<Prisma.$pollOptionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one PollOptions.
     * @param {pollOptionsUpdateArgs} args - Arguments to update one PollOptions.
     * @example
     * // Update one PollOptions
     * const pollOptions = await prisma.pollOptions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends pollOptionsUpdateArgs>(args: Prisma.SelectSubset<T, pollOptionsUpdateArgs<ExtArgs>>): Prisma.Prisma__pollOptionsClient<runtime.Types.Result.GetResult<Prisma.$pollOptionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more PollOptions.
     * @param {pollOptionsDeleteManyArgs} args - Arguments to filter PollOptions to delete.
     * @example
     * // Delete a few PollOptions
     * const { count } = await prisma.pollOptions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends pollOptionsDeleteManyArgs>(args?: Prisma.SelectSubset<T, pollOptionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more PollOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pollOptionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PollOptions
     * const pollOptions = await prisma.pollOptions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends pollOptionsUpdateManyArgs>(args: Prisma.SelectSubset<T, pollOptionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more PollOptions and returns the data updated in the database.
     * @param {pollOptionsUpdateManyAndReturnArgs} args - Arguments to update many PollOptions.
     * @example
     * // Update many PollOptions
     * const pollOptions = await prisma.pollOptions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more PollOptions and only return the `id`
     * const pollOptionsWithIdOnly = await prisma.pollOptions.updateManyAndReturn({
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
    updateManyAndReturn<T extends pollOptionsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, pollOptionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$pollOptionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one PollOptions.
     * @param {pollOptionsUpsertArgs} args - Arguments to update or create a PollOptions.
     * @example
     * // Update or create a PollOptions
     * const pollOptions = await prisma.pollOptions.upsert({
     *   create: {
     *     // ... data to create a PollOptions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PollOptions we want to update
     *   }
     * })
     */
    upsert<T extends pollOptionsUpsertArgs>(args: Prisma.SelectSubset<T, pollOptionsUpsertArgs<ExtArgs>>): Prisma.Prisma__pollOptionsClient<runtime.Types.Result.GetResult<Prisma.$pollOptionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of PollOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pollOptionsCountArgs} args - Arguments to filter PollOptions to count.
     * @example
     * // Count the number of PollOptions
     * const count = await prisma.pollOptions.count({
     *   where: {
     *     // ... the filter for the PollOptions we want to count
     *   }
     * })
    **/
    count<T extends pollOptionsCountArgs>(args?: Prisma.Subset<T, pollOptionsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PollOptionsCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a PollOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PollOptionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PollOptionsAggregateArgs>(args: Prisma.Subset<T, PollOptionsAggregateArgs>): Prisma.PrismaPromise<GetPollOptionsAggregateType<T>>;
    /**
     * Group by PollOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pollOptionsGroupByArgs} args - Group by arguments.
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
    groupBy<T extends pollOptionsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: pollOptionsGroupByArgs['orderBy'];
    } : {
        orderBy?: pollOptionsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, pollOptionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPollOptionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the pollOptions model
     */
    readonly fields: pollOptionsFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for pollOptions.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__pollOptionsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    poll<T extends Prisma.PollDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PollDefaultArgs<ExtArgs>>): Prisma.Prisma__PollClient<runtime.Types.Result.GetResult<Prisma.$PollPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the pollOptions model
 */
export interface pollOptionsFieldRefs {
    readonly id: Prisma.FieldRef<"pollOptions", 'String'>;
    readonly option: Prisma.FieldRef<"pollOptions", 'String'>;
    readonly pollId: Prisma.FieldRef<"pollOptions", 'String'>;
    readonly createdAt: Prisma.FieldRef<"pollOptions", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"pollOptions", 'DateTime'>;
}
/**
 * pollOptions findUnique
 */
export type pollOptionsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pollOptions
     */
    select?: Prisma.pollOptionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the pollOptions
     */
    omit?: Prisma.pollOptionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.pollOptionsInclude<ExtArgs> | null;
    /**
     * Filter, which pollOptions to fetch.
     */
    where: Prisma.pollOptionsWhereUniqueInput;
};
/**
 * pollOptions findUniqueOrThrow
 */
export type pollOptionsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pollOptions
     */
    select?: Prisma.pollOptionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the pollOptions
     */
    omit?: Prisma.pollOptionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.pollOptionsInclude<ExtArgs> | null;
    /**
     * Filter, which pollOptions to fetch.
     */
    where: Prisma.pollOptionsWhereUniqueInput;
};
/**
 * pollOptions findFirst
 */
export type pollOptionsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pollOptions
     */
    select?: Prisma.pollOptionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the pollOptions
     */
    omit?: Prisma.pollOptionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.pollOptionsInclude<ExtArgs> | null;
    /**
     * Filter, which pollOptions to fetch.
     */
    where?: Prisma.pollOptionsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of pollOptions to fetch.
     */
    orderBy?: Prisma.pollOptionsOrderByWithRelationInput | Prisma.pollOptionsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for pollOptions.
     */
    cursor?: Prisma.pollOptionsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` pollOptions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` pollOptions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of pollOptions.
     */
    distinct?: Prisma.PollOptionsScalarFieldEnum | Prisma.PollOptionsScalarFieldEnum[];
};
/**
 * pollOptions findFirstOrThrow
 */
export type pollOptionsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pollOptions
     */
    select?: Prisma.pollOptionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the pollOptions
     */
    omit?: Prisma.pollOptionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.pollOptionsInclude<ExtArgs> | null;
    /**
     * Filter, which pollOptions to fetch.
     */
    where?: Prisma.pollOptionsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of pollOptions to fetch.
     */
    orderBy?: Prisma.pollOptionsOrderByWithRelationInput | Prisma.pollOptionsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for pollOptions.
     */
    cursor?: Prisma.pollOptionsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` pollOptions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` pollOptions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of pollOptions.
     */
    distinct?: Prisma.PollOptionsScalarFieldEnum | Prisma.PollOptionsScalarFieldEnum[];
};
/**
 * pollOptions findMany
 */
export type pollOptionsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pollOptions
     */
    select?: Prisma.pollOptionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the pollOptions
     */
    omit?: Prisma.pollOptionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.pollOptionsInclude<ExtArgs> | null;
    /**
     * Filter, which pollOptions to fetch.
     */
    where?: Prisma.pollOptionsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of pollOptions to fetch.
     */
    orderBy?: Prisma.pollOptionsOrderByWithRelationInput | Prisma.pollOptionsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing pollOptions.
     */
    cursor?: Prisma.pollOptionsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` pollOptions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` pollOptions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of pollOptions.
     */
    distinct?: Prisma.PollOptionsScalarFieldEnum | Prisma.PollOptionsScalarFieldEnum[];
};
/**
 * pollOptions create
 */
export type pollOptionsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pollOptions
     */
    select?: Prisma.pollOptionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the pollOptions
     */
    omit?: Prisma.pollOptionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.pollOptionsInclude<ExtArgs> | null;
    /**
     * The data needed to create a pollOptions.
     */
    data: Prisma.XOR<Prisma.pollOptionsCreateInput, Prisma.pollOptionsUncheckedCreateInput>;
};
/**
 * pollOptions createMany
 */
export type pollOptionsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many pollOptions.
     */
    data: Prisma.pollOptionsCreateManyInput | Prisma.pollOptionsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * pollOptions createManyAndReturn
 */
export type pollOptionsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pollOptions
     */
    select?: Prisma.pollOptionsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the pollOptions
     */
    omit?: Prisma.pollOptionsOmit<ExtArgs> | null;
    /**
     * The data used to create many pollOptions.
     */
    data: Prisma.pollOptionsCreateManyInput | Prisma.pollOptionsCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.pollOptionsIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * pollOptions update
 */
export type pollOptionsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pollOptions
     */
    select?: Prisma.pollOptionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the pollOptions
     */
    omit?: Prisma.pollOptionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.pollOptionsInclude<ExtArgs> | null;
    /**
     * The data needed to update a pollOptions.
     */
    data: Prisma.XOR<Prisma.pollOptionsUpdateInput, Prisma.pollOptionsUncheckedUpdateInput>;
    /**
     * Choose, which pollOptions to update.
     */
    where: Prisma.pollOptionsWhereUniqueInput;
};
/**
 * pollOptions updateMany
 */
export type pollOptionsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update pollOptions.
     */
    data: Prisma.XOR<Prisma.pollOptionsUpdateManyMutationInput, Prisma.pollOptionsUncheckedUpdateManyInput>;
    /**
     * Filter which pollOptions to update
     */
    where?: Prisma.pollOptionsWhereInput;
    /**
     * Limit how many pollOptions to update.
     */
    limit?: number;
};
/**
 * pollOptions updateManyAndReturn
 */
export type pollOptionsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pollOptions
     */
    select?: Prisma.pollOptionsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the pollOptions
     */
    omit?: Prisma.pollOptionsOmit<ExtArgs> | null;
    /**
     * The data used to update pollOptions.
     */
    data: Prisma.XOR<Prisma.pollOptionsUpdateManyMutationInput, Prisma.pollOptionsUncheckedUpdateManyInput>;
    /**
     * Filter which pollOptions to update
     */
    where?: Prisma.pollOptionsWhereInput;
    /**
     * Limit how many pollOptions to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.pollOptionsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * pollOptions upsert
 */
export type pollOptionsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pollOptions
     */
    select?: Prisma.pollOptionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the pollOptions
     */
    omit?: Prisma.pollOptionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.pollOptionsInclude<ExtArgs> | null;
    /**
     * The filter to search for the pollOptions to update in case it exists.
     */
    where: Prisma.pollOptionsWhereUniqueInput;
    /**
     * In case the pollOptions found by the `where` argument doesn't exist, create a new pollOptions with this data.
     */
    create: Prisma.XOR<Prisma.pollOptionsCreateInput, Prisma.pollOptionsUncheckedCreateInput>;
    /**
     * In case the pollOptions was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.pollOptionsUpdateInput, Prisma.pollOptionsUncheckedUpdateInput>;
};
/**
 * pollOptions delete
 */
export type pollOptionsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pollOptions
     */
    select?: Prisma.pollOptionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the pollOptions
     */
    omit?: Prisma.pollOptionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.pollOptionsInclude<ExtArgs> | null;
    /**
     * Filter which pollOptions to delete.
     */
    where: Prisma.pollOptionsWhereUniqueInput;
};
/**
 * pollOptions deleteMany
 */
export type pollOptionsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which pollOptions to delete
     */
    where?: Prisma.pollOptionsWhereInput;
    /**
     * Limit how many pollOptions to delete.
     */
    limit?: number;
};
/**
 * pollOptions without action
 */
export type pollOptionsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pollOptions
     */
    select?: Prisma.pollOptionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the pollOptions
     */
    omit?: Prisma.pollOptionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.pollOptionsInclude<ExtArgs> | null;
};
//# sourceMappingURL=pollOptions.d.ts.map