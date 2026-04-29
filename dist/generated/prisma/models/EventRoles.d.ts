import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model EventRoles
 *
 */
export type EventRolesModel = runtime.Types.Result.DefaultSelection<Prisma.$EventRolesPayload>;
export type AggregateEventRoles = {
    _count: EventRolesCountAggregateOutputType | null;
    _min: EventRolesMinAggregateOutputType | null;
    _max: EventRolesMaxAggregateOutputType | null;
};
export type EventRolesMinAggregateOutputType = {
    id: string | null;
    roleName: string | null;
    roleDescription: string | null;
    eventPostId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type EventRolesMaxAggregateOutputType = {
    id: string | null;
    roleName: string | null;
    roleDescription: string | null;
    eventPostId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type EventRolesCountAggregateOutputType = {
    id: number;
    roleName: number;
    roleDescription: number;
    eventPostId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type EventRolesMinAggregateInputType = {
    id?: true;
    roleName?: true;
    roleDescription?: true;
    eventPostId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type EventRolesMaxAggregateInputType = {
    id?: true;
    roleName?: true;
    roleDescription?: true;
    eventPostId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type EventRolesCountAggregateInputType = {
    id?: true;
    roleName?: true;
    roleDescription?: true;
    eventPostId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type EventRolesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which EventRoles to aggregate.
     */
    where?: Prisma.EventRolesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EventRoles to fetch.
     */
    orderBy?: Prisma.EventRolesOrderByWithRelationInput | Prisma.EventRolesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.EventRolesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EventRoles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EventRoles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned EventRoles
    **/
    _count?: true | EventRolesCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: EventRolesMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: EventRolesMaxAggregateInputType;
};
export type GetEventRolesAggregateType<T extends EventRolesAggregateArgs> = {
    [P in keyof T & keyof AggregateEventRoles]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEventRoles[P]> : Prisma.GetScalarType<T[P], AggregateEventRoles[P]>;
};
export type EventRolesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EventRolesWhereInput;
    orderBy?: Prisma.EventRolesOrderByWithAggregationInput | Prisma.EventRolesOrderByWithAggregationInput[];
    by: Prisma.EventRolesScalarFieldEnum[] | Prisma.EventRolesScalarFieldEnum;
    having?: Prisma.EventRolesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EventRolesCountAggregateInputType | true;
    _min?: EventRolesMinAggregateInputType;
    _max?: EventRolesMaxAggregateInputType;
};
export type EventRolesGroupByOutputType = {
    id: string;
    roleName: string;
    roleDescription: string;
    eventPostId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: EventRolesCountAggregateOutputType | null;
    _min: EventRolesMinAggregateOutputType | null;
    _max: EventRolesMaxAggregateOutputType | null;
};
export type GetEventRolesGroupByPayload<T extends EventRolesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EventRolesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EventRolesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EventRolesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EventRolesGroupByOutputType[P]>;
}>>;
export type EventRolesWhereInput = {
    AND?: Prisma.EventRolesWhereInput | Prisma.EventRolesWhereInput[];
    OR?: Prisma.EventRolesWhereInput[];
    NOT?: Prisma.EventRolesWhereInput | Prisma.EventRolesWhereInput[];
    id?: Prisma.StringFilter<"EventRoles"> | string;
    roleName?: Prisma.StringFilter<"EventRoles"> | string;
    roleDescription?: Prisma.StringFilter<"EventRoles"> | string;
    eventPostId?: Prisma.StringFilter<"EventRoles"> | string;
    createdAt?: Prisma.DateTimeFilter<"EventRoles"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"EventRoles"> | Date | string;
    eventPost?: Prisma.XOR<Prisma.EventPostScalarRelationFilter, Prisma.EventPostWhereInput>;
};
export type EventRolesOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    roleName?: Prisma.SortOrder;
    roleDescription?: Prisma.SortOrder;
    eventPostId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    eventPost?: Prisma.EventPostOrderByWithRelationInput;
};
export type EventRolesWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.EventRolesWhereInput | Prisma.EventRolesWhereInput[];
    OR?: Prisma.EventRolesWhereInput[];
    NOT?: Prisma.EventRolesWhereInput | Prisma.EventRolesWhereInput[];
    roleName?: Prisma.StringFilter<"EventRoles"> | string;
    roleDescription?: Prisma.StringFilter<"EventRoles"> | string;
    eventPostId?: Prisma.StringFilter<"EventRoles"> | string;
    createdAt?: Prisma.DateTimeFilter<"EventRoles"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"EventRoles"> | Date | string;
    eventPost?: Prisma.XOR<Prisma.EventPostScalarRelationFilter, Prisma.EventPostWhereInput>;
}, "id">;
export type EventRolesOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    roleName?: Prisma.SortOrder;
    roleDescription?: Prisma.SortOrder;
    eventPostId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.EventRolesCountOrderByAggregateInput;
    _max?: Prisma.EventRolesMaxOrderByAggregateInput;
    _min?: Prisma.EventRolesMinOrderByAggregateInput;
};
export type EventRolesScalarWhereWithAggregatesInput = {
    AND?: Prisma.EventRolesScalarWhereWithAggregatesInput | Prisma.EventRolesScalarWhereWithAggregatesInput[];
    OR?: Prisma.EventRolesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EventRolesScalarWhereWithAggregatesInput | Prisma.EventRolesScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"EventRoles"> | string;
    roleName?: Prisma.StringWithAggregatesFilter<"EventRoles"> | string;
    roleDescription?: Prisma.StringWithAggregatesFilter<"EventRoles"> | string;
    eventPostId?: Prisma.StringWithAggregatesFilter<"EventRoles"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"EventRoles"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"EventRoles"> | Date | string;
};
export type EventRolesCreateInput = {
    id?: string;
    roleName: string;
    roleDescription: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    eventPost: Prisma.EventPostCreateNestedOneWithoutEventRolesInput;
};
export type EventRolesUncheckedCreateInput = {
    id?: string;
    roleName: string;
    roleDescription: string;
    eventPostId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type EventRolesUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    roleName?: Prisma.StringFieldUpdateOperationsInput | string;
    roleDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    eventPost?: Prisma.EventPostUpdateOneRequiredWithoutEventRolesNestedInput;
};
export type EventRolesUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    roleName?: Prisma.StringFieldUpdateOperationsInput | string;
    roleDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    eventPostId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EventRolesCreateManyInput = {
    id?: string;
    roleName: string;
    roleDescription: string;
    eventPostId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type EventRolesUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    roleName?: Prisma.StringFieldUpdateOperationsInput | string;
    roleDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EventRolesUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    roleName?: Prisma.StringFieldUpdateOperationsInput | string;
    roleDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    eventPostId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EventRolesListRelationFilter = {
    every?: Prisma.EventRolesWhereInput;
    some?: Prisma.EventRolesWhereInput;
    none?: Prisma.EventRolesWhereInput;
};
export type EventRolesOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type EventRolesCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    roleName?: Prisma.SortOrder;
    roleDescription?: Prisma.SortOrder;
    eventPostId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EventRolesMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    roleName?: Prisma.SortOrder;
    roleDescription?: Prisma.SortOrder;
    eventPostId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EventRolesMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    roleName?: Prisma.SortOrder;
    roleDescription?: Prisma.SortOrder;
    eventPostId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EventRolesCreateNestedManyWithoutEventPostInput = {
    create?: Prisma.XOR<Prisma.EventRolesCreateWithoutEventPostInput, Prisma.EventRolesUncheckedCreateWithoutEventPostInput> | Prisma.EventRolesCreateWithoutEventPostInput[] | Prisma.EventRolesUncheckedCreateWithoutEventPostInput[];
    connectOrCreate?: Prisma.EventRolesCreateOrConnectWithoutEventPostInput | Prisma.EventRolesCreateOrConnectWithoutEventPostInput[];
    createMany?: Prisma.EventRolesCreateManyEventPostInputEnvelope;
    connect?: Prisma.EventRolesWhereUniqueInput | Prisma.EventRolesWhereUniqueInput[];
};
export type EventRolesUncheckedCreateNestedManyWithoutEventPostInput = {
    create?: Prisma.XOR<Prisma.EventRolesCreateWithoutEventPostInput, Prisma.EventRolesUncheckedCreateWithoutEventPostInput> | Prisma.EventRolesCreateWithoutEventPostInput[] | Prisma.EventRolesUncheckedCreateWithoutEventPostInput[];
    connectOrCreate?: Prisma.EventRolesCreateOrConnectWithoutEventPostInput | Prisma.EventRolesCreateOrConnectWithoutEventPostInput[];
    createMany?: Prisma.EventRolesCreateManyEventPostInputEnvelope;
    connect?: Prisma.EventRolesWhereUniqueInput | Prisma.EventRolesWhereUniqueInput[];
};
export type EventRolesUpdateManyWithoutEventPostNestedInput = {
    create?: Prisma.XOR<Prisma.EventRolesCreateWithoutEventPostInput, Prisma.EventRolesUncheckedCreateWithoutEventPostInput> | Prisma.EventRolesCreateWithoutEventPostInput[] | Prisma.EventRolesUncheckedCreateWithoutEventPostInput[];
    connectOrCreate?: Prisma.EventRolesCreateOrConnectWithoutEventPostInput | Prisma.EventRolesCreateOrConnectWithoutEventPostInput[];
    upsert?: Prisma.EventRolesUpsertWithWhereUniqueWithoutEventPostInput | Prisma.EventRolesUpsertWithWhereUniqueWithoutEventPostInput[];
    createMany?: Prisma.EventRolesCreateManyEventPostInputEnvelope;
    set?: Prisma.EventRolesWhereUniqueInput | Prisma.EventRolesWhereUniqueInput[];
    disconnect?: Prisma.EventRolesWhereUniqueInput | Prisma.EventRolesWhereUniqueInput[];
    delete?: Prisma.EventRolesWhereUniqueInput | Prisma.EventRolesWhereUniqueInput[];
    connect?: Prisma.EventRolesWhereUniqueInput | Prisma.EventRolesWhereUniqueInput[];
    update?: Prisma.EventRolesUpdateWithWhereUniqueWithoutEventPostInput | Prisma.EventRolesUpdateWithWhereUniqueWithoutEventPostInput[];
    updateMany?: Prisma.EventRolesUpdateManyWithWhereWithoutEventPostInput | Prisma.EventRolesUpdateManyWithWhereWithoutEventPostInput[];
    deleteMany?: Prisma.EventRolesScalarWhereInput | Prisma.EventRolesScalarWhereInput[];
};
export type EventRolesUncheckedUpdateManyWithoutEventPostNestedInput = {
    create?: Prisma.XOR<Prisma.EventRolesCreateWithoutEventPostInput, Prisma.EventRolesUncheckedCreateWithoutEventPostInput> | Prisma.EventRolesCreateWithoutEventPostInput[] | Prisma.EventRolesUncheckedCreateWithoutEventPostInput[];
    connectOrCreate?: Prisma.EventRolesCreateOrConnectWithoutEventPostInput | Prisma.EventRolesCreateOrConnectWithoutEventPostInput[];
    upsert?: Prisma.EventRolesUpsertWithWhereUniqueWithoutEventPostInput | Prisma.EventRolesUpsertWithWhereUniqueWithoutEventPostInput[];
    createMany?: Prisma.EventRolesCreateManyEventPostInputEnvelope;
    set?: Prisma.EventRolesWhereUniqueInput | Prisma.EventRolesWhereUniqueInput[];
    disconnect?: Prisma.EventRolesWhereUniqueInput | Prisma.EventRolesWhereUniqueInput[];
    delete?: Prisma.EventRolesWhereUniqueInput | Prisma.EventRolesWhereUniqueInput[];
    connect?: Prisma.EventRolesWhereUniqueInput | Prisma.EventRolesWhereUniqueInput[];
    update?: Prisma.EventRolesUpdateWithWhereUniqueWithoutEventPostInput | Prisma.EventRolesUpdateWithWhereUniqueWithoutEventPostInput[];
    updateMany?: Prisma.EventRolesUpdateManyWithWhereWithoutEventPostInput | Prisma.EventRolesUpdateManyWithWhereWithoutEventPostInput[];
    deleteMany?: Prisma.EventRolesScalarWhereInput | Prisma.EventRolesScalarWhereInput[];
};
export type EventRolesCreateWithoutEventPostInput = {
    id?: string;
    roleName: string;
    roleDescription: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type EventRolesUncheckedCreateWithoutEventPostInput = {
    id?: string;
    roleName: string;
    roleDescription: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type EventRolesCreateOrConnectWithoutEventPostInput = {
    where: Prisma.EventRolesWhereUniqueInput;
    create: Prisma.XOR<Prisma.EventRolesCreateWithoutEventPostInput, Prisma.EventRolesUncheckedCreateWithoutEventPostInput>;
};
export type EventRolesCreateManyEventPostInputEnvelope = {
    data: Prisma.EventRolesCreateManyEventPostInput | Prisma.EventRolesCreateManyEventPostInput[];
    skipDuplicates?: boolean;
};
export type EventRolesUpsertWithWhereUniqueWithoutEventPostInput = {
    where: Prisma.EventRolesWhereUniqueInput;
    update: Prisma.XOR<Prisma.EventRolesUpdateWithoutEventPostInput, Prisma.EventRolesUncheckedUpdateWithoutEventPostInput>;
    create: Prisma.XOR<Prisma.EventRolesCreateWithoutEventPostInput, Prisma.EventRolesUncheckedCreateWithoutEventPostInput>;
};
export type EventRolesUpdateWithWhereUniqueWithoutEventPostInput = {
    where: Prisma.EventRolesWhereUniqueInput;
    data: Prisma.XOR<Prisma.EventRolesUpdateWithoutEventPostInput, Prisma.EventRolesUncheckedUpdateWithoutEventPostInput>;
};
export type EventRolesUpdateManyWithWhereWithoutEventPostInput = {
    where: Prisma.EventRolesScalarWhereInput;
    data: Prisma.XOR<Prisma.EventRolesUpdateManyMutationInput, Prisma.EventRolesUncheckedUpdateManyWithoutEventPostInput>;
};
export type EventRolesScalarWhereInput = {
    AND?: Prisma.EventRolesScalarWhereInput | Prisma.EventRolesScalarWhereInput[];
    OR?: Prisma.EventRolesScalarWhereInput[];
    NOT?: Prisma.EventRolesScalarWhereInput | Prisma.EventRolesScalarWhereInput[];
    id?: Prisma.StringFilter<"EventRoles"> | string;
    roleName?: Prisma.StringFilter<"EventRoles"> | string;
    roleDescription?: Prisma.StringFilter<"EventRoles"> | string;
    eventPostId?: Prisma.StringFilter<"EventRoles"> | string;
    createdAt?: Prisma.DateTimeFilter<"EventRoles"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"EventRoles"> | Date | string;
};
export type EventRolesCreateManyEventPostInput = {
    id?: string;
    roleName: string;
    roleDescription: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type EventRolesUpdateWithoutEventPostInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    roleName?: Prisma.StringFieldUpdateOperationsInput | string;
    roleDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EventRolesUncheckedUpdateWithoutEventPostInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    roleName?: Prisma.StringFieldUpdateOperationsInput | string;
    roleDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EventRolesUncheckedUpdateManyWithoutEventPostInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    roleName?: Prisma.StringFieldUpdateOperationsInput | string;
    roleDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EventRolesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    roleName?: boolean;
    roleDescription?: boolean;
    eventPostId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    eventPost?: boolean | Prisma.EventPostDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["eventRoles"]>;
export type EventRolesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    roleName?: boolean;
    roleDescription?: boolean;
    eventPostId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    eventPost?: boolean | Prisma.EventPostDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["eventRoles"]>;
export type EventRolesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    roleName?: boolean;
    roleDescription?: boolean;
    eventPostId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    eventPost?: boolean | Prisma.EventPostDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["eventRoles"]>;
export type EventRolesSelectScalar = {
    id?: boolean;
    roleName?: boolean;
    roleDescription?: boolean;
    eventPostId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type EventRolesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "roleName" | "roleDescription" | "eventPostId" | "createdAt" | "updatedAt", ExtArgs["result"]["eventRoles"]>;
export type EventRolesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    eventPost?: boolean | Prisma.EventPostDefaultArgs<ExtArgs>;
};
export type EventRolesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    eventPost?: boolean | Prisma.EventPostDefaultArgs<ExtArgs>;
};
export type EventRolesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    eventPost?: boolean | Prisma.EventPostDefaultArgs<ExtArgs>;
};
export type $EventRolesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "EventRoles";
    objects: {
        eventPost: Prisma.$EventPostPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        roleName: string;
        roleDescription: string;
        eventPostId: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["eventRoles"]>;
    composites: {};
};
export type EventRolesGetPayload<S extends boolean | null | undefined | EventRolesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EventRolesPayload, S>;
export type EventRolesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EventRolesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EventRolesCountAggregateInputType | true;
};
export interface EventRolesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['EventRoles'];
        meta: {
            name: 'EventRoles';
        };
    };
    /**
     * Find zero or one EventRoles that matches the filter.
     * @param {EventRolesFindUniqueArgs} args - Arguments to find a EventRoles
     * @example
     * // Get one EventRoles
     * const eventRoles = await prisma.eventRoles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventRolesFindUniqueArgs>(args: Prisma.SelectSubset<T, EventRolesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EventRolesClient<runtime.Types.Result.GetResult<Prisma.$EventRolesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one EventRoles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventRolesFindUniqueOrThrowArgs} args - Arguments to find a EventRoles
     * @example
     * // Get one EventRoles
     * const eventRoles = await prisma.eventRoles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventRolesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EventRolesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EventRolesClient<runtime.Types.Result.GetResult<Prisma.$EventRolesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first EventRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventRolesFindFirstArgs} args - Arguments to find a EventRoles
     * @example
     * // Get one EventRoles
     * const eventRoles = await prisma.eventRoles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventRolesFindFirstArgs>(args?: Prisma.SelectSubset<T, EventRolesFindFirstArgs<ExtArgs>>): Prisma.Prisma__EventRolesClient<runtime.Types.Result.GetResult<Prisma.$EventRolesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first EventRoles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventRolesFindFirstOrThrowArgs} args - Arguments to find a EventRoles
     * @example
     * // Get one EventRoles
     * const eventRoles = await prisma.eventRoles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventRolesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EventRolesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EventRolesClient<runtime.Types.Result.GetResult<Prisma.$EventRolesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more EventRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventRolesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventRoles
     * const eventRoles = await prisma.eventRoles.findMany()
     *
     * // Get first 10 EventRoles
     * const eventRoles = await prisma.eventRoles.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const eventRolesWithIdOnly = await prisma.eventRoles.findMany({ select: { id: true } })
     *
     */
    findMany<T extends EventRolesFindManyArgs>(args?: Prisma.SelectSubset<T, EventRolesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EventRolesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a EventRoles.
     * @param {EventRolesCreateArgs} args - Arguments to create a EventRoles.
     * @example
     * // Create one EventRoles
     * const EventRoles = await prisma.eventRoles.create({
     *   data: {
     *     // ... data to create a EventRoles
     *   }
     * })
     *
     */
    create<T extends EventRolesCreateArgs>(args: Prisma.SelectSubset<T, EventRolesCreateArgs<ExtArgs>>): Prisma.Prisma__EventRolesClient<runtime.Types.Result.GetResult<Prisma.$EventRolesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many EventRoles.
     * @param {EventRolesCreateManyArgs} args - Arguments to create many EventRoles.
     * @example
     * // Create many EventRoles
     * const eventRoles = await prisma.eventRoles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends EventRolesCreateManyArgs>(args?: Prisma.SelectSubset<T, EventRolesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many EventRoles and returns the data saved in the database.
     * @param {EventRolesCreateManyAndReturnArgs} args - Arguments to create many EventRoles.
     * @example
     * // Create many EventRoles
     * const eventRoles = await prisma.eventRoles.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many EventRoles and only return the `id`
     * const eventRolesWithIdOnly = await prisma.eventRoles.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends EventRolesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EventRolesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EventRolesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a EventRoles.
     * @param {EventRolesDeleteArgs} args - Arguments to delete one EventRoles.
     * @example
     * // Delete one EventRoles
     * const EventRoles = await prisma.eventRoles.delete({
     *   where: {
     *     // ... filter to delete one EventRoles
     *   }
     * })
     *
     */
    delete<T extends EventRolesDeleteArgs>(args: Prisma.SelectSubset<T, EventRolesDeleteArgs<ExtArgs>>): Prisma.Prisma__EventRolesClient<runtime.Types.Result.GetResult<Prisma.$EventRolesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one EventRoles.
     * @param {EventRolesUpdateArgs} args - Arguments to update one EventRoles.
     * @example
     * // Update one EventRoles
     * const eventRoles = await prisma.eventRoles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends EventRolesUpdateArgs>(args: Prisma.SelectSubset<T, EventRolesUpdateArgs<ExtArgs>>): Prisma.Prisma__EventRolesClient<runtime.Types.Result.GetResult<Prisma.$EventRolesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more EventRoles.
     * @param {EventRolesDeleteManyArgs} args - Arguments to filter EventRoles to delete.
     * @example
     * // Delete a few EventRoles
     * const { count } = await prisma.eventRoles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends EventRolesDeleteManyArgs>(args?: Prisma.SelectSubset<T, EventRolesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more EventRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventRolesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventRoles
     * const eventRoles = await prisma.eventRoles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends EventRolesUpdateManyArgs>(args: Prisma.SelectSubset<T, EventRolesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more EventRoles and returns the data updated in the database.
     * @param {EventRolesUpdateManyAndReturnArgs} args - Arguments to update many EventRoles.
     * @example
     * // Update many EventRoles
     * const eventRoles = await prisma.eventRoles.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more EventRoles and only return the `id`
     * const eventRolesWithIdOnly = await prisma.eventRoles.updateManyAndReturn({
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
    updateManyAndReturn<T extends EventRolesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EventRolesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EventRolesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one EventRoles.
     * @param {EventRolesUpsertArgs} args - Arguments to update or create a EventRoles.
     * @example
     * // Update or create a EventRoles
     * const eventRoles = await prisma.eventRoles.upsert({
     *   create: {
     *     // ... data to create a EventRoles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventRoles we want to update
     *   }
     * })
     */
    upsert<T extends EventRolesUpsertArgs>(args: Prisma.SelectSubset<T, EventRolesUpsertArgs<ExtArgs>>): Prisma.Prisma__EventRolesClient<runtime.Types.Result.GetResult<Prisma.$EventRolesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of EventRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventRolesCountArgs} args - Arguments to filter EventRoles to count.
     * @example
     * // Count the number of EventRoles
     * const count = await prisma.eventRoles.count({
     *   where: {
     *     // ... the filter for the EventRoles we want to count
     *   }
     * })
    **/
    count<T extends EventRolesCountArgs>(args?: Prisma.Subset<T, EventRolesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EventRolesCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a EventRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventRolesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventRolesAggregateArgs>(args: Prisma.Subset<T, EventRolesAggregateArgs>): Prisma.PrismaPromise<GetEventRolesAggregateType<T>>;
    /**
     * Group by EventRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventRolesGroupByArgs} args - Group by arguments.
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
    groupBy<T extends EventRolesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EventRolesGroupByArgs['orderBy'];
    } : {
        orderBy?: EventRolesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EventRolesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventRolesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the EventRoles model
     */
    readonly fields: EventRolesFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for EventRoles.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__EventRolesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    eventPost<T extends Prisma.EventPostDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EventPostDefaultArgs<ExtArgs>>): Prisma.Prisma__EventPostClient<runtime.Types.Result.GetResult<Prisma.$EventPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the EventRoles model
 */
export interface EventRolesFieldRefs {
    readonly id: Prisma.FieldRef<"EventRoles", 'String'>;
    readonly roleName: Prisma.FieldRef<"EventRoles", 'String'>;
    readonly roleDescription: Prisma.FieldRef<"EventRoles", 'String'>;
    readonly eventPostId: Prisma.FieldRef<"EventRoles", 'String'>;
    readonly createdAt: Prisma.FieldRef<"EventRoles", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"EventRoles", 'DateTime'>;
}
/**
 * EventRoles findUnique
 */
export type EventRolesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRoles
     */
    select?: Prisma.EventRolesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventRoles
     */
    omit?: Prisma.EventRolesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventRolesInclude<ExtArgs> | null;
    /**
     * Filter, which EventRoles to fetch.
     */
    where: Prisma.EventRolesWhereUniqueInput;
};
/**
 * EventRoles findUniqueOrThrow
 */
export type EventRolesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRoles
     */
    select?: Prisma.EventRolesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventRoles
     */
    omit?: Prisma.EventRolesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventRolesInclude<ExtArgs> | null;
    /**
     * Filter, which EventRoles to fetch.
     */
    where: Prisma.EventRolesWhereUniqueInput;
};
/**
 * EventRoles findFirst
 */
export type EventRolesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRoles
     */
    select?: Prisma.EventRolesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventRoles
     */
    omit?: Prisma.EventRolesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventRolesInclude<ExtArgs> | null;
    /**
     * Filter, which EventRoles to fetch.
     */
    where?: Prisma.EventRolesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EventRoles to fetch.
     */
    orderBy?: Prisma.EventRolesOrderByWithRelationInput | Prisma.EventRolesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for EventRoles.
     */
    cursor?: Prisma.EventRolesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EventRoles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EventRoles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of EventRoles.
     */
    distinct?: Prisma.EventRolesScalarFieldEnum | Prisma.EventRolesScalarFieldEnum[];
};
/**
 * EventRoles findFirstOrThrow
 */
export type EventRolesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRoles
     */
    select?: Prisma.EventRolesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventRoles
     */
    omit?: Prisma.EventRolesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventRolesInclude<ExtArgs> | null;
    /**
     * Filter, which EventRoles to fetch.
     */
    where?: Prisma.EventRolesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EventRoles to fetch.
     */
    orderBy?: Prisma.EventRolesOrderByWithRelationInput | Prisma.EventRolesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for EventRoles.
     */
    cursor?: Prisma.EventRolesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EventRoles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EventRoles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of EventRoles.
     */
    distinct?: Prisma.EventRolesScalarFieldEnum | Prisma.EventRolesScalarFieldEnum[];
};
/**
 * EventRoles findMany
 */
export type EventRolesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRoles
     */
    select?: Prisma.EventRolesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventRoles
     */
    omit?: Prisma.EventRolesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventRolesInclude<ExtArgs> | null;
    /**
     * Filter, which EventRoles to fetch.
     */
    where?: Prisma.EventRolesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EventRoles to fetch.
     */
    orderBy?: Prisma.EventRolesOrderByWithRelationInput | Prisma.EventRolesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing EventRoles.
     */
    cursor?: Prisma.EventRolesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EventRoles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EventRoles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of EventRoles.
     */
    distinct?: Prisma.EventRolesScalarFieldEnum | Prisma.EventRolesScalarFieldEnum[];
};
/**
 * EventRoles create
 */
export type EventRolesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRoles
     */
    select?: Prisma.EventRolesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventRoles
     */
    omit?: Prisma.EventRolesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventRolesInclude<ExtArgs> | null;
    /**
     * The data needed to create a EventRoles.
     */
    data: Prisma.XOR<Prisma.EventRolesCreateInput, Prisma.EventRolesUncheckedCreateInput>;
};
/**
 * EventRoles createMany
 */
export type EventRolesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventRoles.
     */
    data: Prisma.EventRolesCreateManyInput | Prisma.EventRolesCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * EventRoles createManyAndReturn
 */
export type EventRolesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRoles
     */
    select?: Prisma.EventRolesSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the EventRoles
     */
    omit?: Prisma.EventRolesOmit<ExtArgs> | null;
    /**
     * The data used to create many EventRoles.
     */
    data: Prisma.EventRolesCreateManyInput | Prisma.EventRolesCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventRolesIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * EventRoles update
 */
export type EventRolesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRoles
     */
    select?: Prisma.EventRolesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventRoles
     */
    omit?: Prisma.EventRolesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventRolesInclude<ExtArgs> | null;
    /**
     * The data needed to update a EventRoles.
     */
    data: Prisma.XOR<Prisma.EventRolesUpdateInput, Prisma.EventRolesUncheckedUpdateInput>;
    /**
     * Choose, which EventRoles to update.
     */
    where: Prisma.EventRolesWhereUniqueInput;
};
/**
 * EventRoles updateMany
 */
export type EventRolesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update EventRoles.
     */
    data: Prisma.XOR<Prisma.EventRolesUpdateManyMutationInput, Prisma.EventRolesUncheckedUpdateManyInput>;
    /**
     * Filter which EventRoles to update
     */
    where?: Prisma.EventRolesWhereInput;
    /**
     * Limit how many EventRoles to update.
     */
    limit?: number;
};
/**
 * EventRoles updateManyAndReturn
 */
export type EventRolesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRoles
     */
    select?: Prisma.EventRolesSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the EventRoles
     */
    omit?: Prisma.EventRolesOmit<ExtArgs> | null;
    /**
     * The data used to update EventRoles.
     */
    data: Prisma.XOR<Prisma.EventRolesUpdateManyMutationInput, Prisma.EventRolesUncheckedUpdateManyInput>;
    /**
     * Filter which EventRoles to update
     */
    where?: Prisma.EventRolesWhereInput;
    /**
     * Limit how many EventRoles to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventRolesIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * EventRoles upsert
 */
export type EventRolesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRoles
     */
    select?: Prisma.EventRolesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventRoles
     */
    omit?: Prisma.EventRolesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventRolesInclude<ExtArgs> | null;
    /**
     * The filter to search for the EventRoles to update in case it exists.
     */
    where: Prisma.EventRolesWhereUniqueInput;
    /**
     * In case the EventRoles found by the `where` argument doesn't exist, create a new EventRoles with this data.
     */
    create: Prisma.XOR<Prisma.EventRolesCreateInput, Prisma.EventRolesUncheckedCreateInput>;
    /**
     * In case the EventRoles was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.EventRolesUpdateInput, Prisma.EventRolesUncheckedUpdateInput>;
};
/**
 * EventRoles delete
 */
export type EventRolesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRoles
     */
    select?: Prisma.EventRolesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventRoles
     */
    omit?: Prisma.EventRolesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventRolesInclude<ExtArgs> | null;
    /**
     * Filter which EventRoles to delete.
     */
    where: Prisma.EventRolesWhereUniqueInput;
};
/**
 * EventRoles deleteMany
 */
export type EventRolesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which EventRoles to delete
     */
    where?: Prisma.EventRolesWhereInput;
    /**
     * Limit how many EventRoles to delete.
     */
    limit?: number;
};
/**
 * EventRoles without action
 */
export type EventRolesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRoles
     */
    select?: Prisma.EventRolesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventRoles
     */
    omit?: Prisma.EventRolesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventRolesInclude<ExtArgs> | null;
};
//# sourceMappingURL=EventRoles.d.ts.map