import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model EventPost
 *
 */
export type EventPostModel = runtime.Types.Result.DefaultSelection<Prisma.$EventPostPayload>;
export type AggregateEventPost = {
    _count: EventPostCountAggregateOutputType | null;
    _min: EventPostMinAggregateOutputType | null;
    _max: EventPostMaxAggregateOutputType | null;
};
export type EventPostMinAggregateOutputType = {
    id: string | null;
    eventName: string | null;
    eventDescription: string | null;
    eventStartDate: Date | null;
    eventEndDate: Date | null;
    notificationType: $Enums.NotificationType | null;
    eventImage: string | null;
    notes: string | null;
    postId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type EventPostMaxAggregateOutputType = {
    id: string | null;
    eventName: string | null;
    eventDescription: string | null;
    eventStartDate: Date | null;
    eventEndDate: Date | null;
    notificationType: $Enums.NotificationType | null;
    eventImage: string | null;
    notes: string | null;
    postId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type EventPostCountAggregateOutputType = {
    id: number;
    eventName: number;
    eventDescription: number;
    eventStartDate: number;
    eventEndDate: number;
    eventLocation: number;
    notificationType: number;
    eventImage: number;
    notes: number;
    postId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type EventPostMinAggregateInputType = {
    id?: true;
    eventName?: true;
    eventDescription?: true;
    eventStartDate?: true;
    eventEndDate?: true;
    notificationType?: true;
    eventImage?: true;
    notes?: true;
    postId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type EventPostMaxAggregateInputType = {
    id?: true;
    eventName?: true;
    eventDescription?: true;
    eventStartDate?: true;
    eventEndDate?: true;
    notificationType?: true;
    eventImage?: true;
    notes?: true;
    postId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type EventPostCountAggregateInputType = {
    id?: true;
    eventName?: true;
    eventDescription?: true;
    eventStartDate?: true;
    eventEndDate?: true;
    eventLocation?: true;
    notificationType?: true;
    eventImage?: true;
    notes?: true;
    postId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type EventPostAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which EventPost to aggregate.
     */
    where?: Prisma.EventPostWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EventPosts to fetch.
     */
    orderBy?: Prisma.EventPostOrderByWithRelationInput | Prisma.EventPostOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.EventPostWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EventPosts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EventPosts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned EventPosts
    **/
    _count?: true | EventPostCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: EventPostMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: EventPostMaxAggregateInputType;
};
export type GetEventPostAggregateType<T extends EventPostAggregateArgs> = {
    [P in keyof T & keyof AggregateEventPost]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEventPost[P]> : Prisma.GetScalarType<T[P], AggregateEventPost[P]>;
};
export type EventPostGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EventPostWhereInput;
    orderBy?: Prisma.EventPostOrderByWithAggregationInput | Prisma.EventPostOrderByWithAggregationInput[];
    by: Prisma.EventPostScalarFieldEnum[] | Prisma.EventPostScalarFieldEnum;
    having?: Prisma.EventPostScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EventPostCountAggregateInputType | true;
    _min?: EventPostMinAggregateInputType;
    _max?: EventPostMaxAggregateInputType;
};
export type EventPostGroupByOutputType = {
    id: string;
    eventName: string;
    eventDescription: string;
    eventStartDate: Date;
    eventEndDate: Date;
    eventLocation: runtime.JsonValue;
    notificationType: $Enums.NotificationType;
    eventImage: string | null;
    notes: string | null;
    postId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: EventPostCountAggregateOutputType | null;
    _min: EventPostMinAggregateOutputType | null;
    _max: EventPostMaxAggregateOutputType | null;
};
export type GetEventPostGroupByPayload<T extends EventPostGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EventPostGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EventPostGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EventPostGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EventPostGroupByOutputType[P]>;
}>>;
export type EventPostWhereInput = {
    AND?: Prisma.EventPostWhereInput | Prisma.EventPostWhereInput[];
    OR?: Prisma.EventPostWhereInput[];
    NOT?: Prisma.EventPostWhereInput | Prisma.EventPostWhereInput[];
    id?: Prisma.StringFilter<"EventPost"> | string;
    eventName?: Prisma.StringFilter<"EventPost"> | string;
    eventDescription?: Prisma.StringFilter<"EventPost"> | string;
    eventStartDate?: Prisma.DateTimeFilter<"EventPost"> | Date | string;
    eventEndDate?: Prisma.DateTimeFilter<"EventPost"> | Date | string;
    eventLocation?: Prisma.JsonFilter<"EventPost">;
    notificationType?: Prisma.EnumNotificationTypeFilter<"EventPost"> | $Enums.NotificationType;
    eventImage?: Prisma.StringNullableFilter<"EventPost"> | string | null;
    notes?: Prisma.StringNullableFilter<"EventPost"> | string | null;
    postId?: Prisma.StringFilter<"EventPost"> | string;
    createdAt?: Prisma.DateTimeFilter<"EventPost"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"EventPost"> | Date | string;
    post?: Prisma.XOR<Prisma.PostScalarRelationFilter, Prisma.PostWhereInput>;
    eventRoles?: Prisma.EventRolesListRelationFilter;
};
export type EventPostOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    eventName?: Prisma.SortOrder;
    eventDescription?: Prisma.SortOrder;
    eventStartDate?: Prisma.SortOrder;
    eventEndDate?: Prisma.SortOrder;
    eventLocation?: Prisma.SortOrder;
    notificationType?: Prisma.SortOrder;
    eventImage?: Prisma.SortOrderInput | Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    postId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    post?: Prisma.PostOrderByWithRelationInput;
    eventRoles?: Prisma.EventRolesOrderByRelationAggregateInput;
};
export type EventPostWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    postId?: string;
    AND?: Prisma.EventPostWhereInput | Prisma.EventPostWhereInput[];
    OR?: Prisma.EventPostWhereInput[];
    NOT?: Prisma.EventPostWhereInput | Prisma.EventPostWhereInput[];
    eventName?: Prisma.StringFilter<"EventPost"> | string;
    eventDescription?: Prisma.StringFilter<"EventPost"> | string;
    eventStartDate?: Prisma.DateTimeFilter<"EventPost"> | Date | string;
    eventEndDate?: Prisma.DateTimeFilter<"EventPost"> | Date | string;
    eventLocation?: Prisma.JsonFilter<"EventPost">;
    notificationType?: Prisma.EnumNotificationTypeFilter<"EventPost"> | $Enums.NotificationType;
    eventImage?: Prisma.StringNullableFilter<"EventPost"> | string | null;
    notes?: Prisma.StringNullableFilter<"EventPost"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"EventPost"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"EventPost"> | Date | string;
    post?: Prisma.XOR<Prisma.PostScalarRelationFilter, Prisma.PostWhereInput>;
    eventRoles?: Prisma.EventRolesListRelationFilter;
}, "id" | "postId">;
export type EventPostOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    eventName?: Prisma.SortOrder;
    eventDescription?: Prisma.SortOrder;
    eventStartDate?: Prisma.SortOrder;
    eventEndDate?: Prisma.SortOrder;
    eventLocation?: Prisma.SortOrder;
    notificationType?: Prisma.SortOrder;
    eventImage?: Prisma.SortOrderInput | Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    postId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.EventPostCountOrderByAggregateInput;
    _max?: Prisma.EventPostMaxOrderByAggregateInput;
    _min?: Prisma.EventPostMinOrderByAggregateInput;
};
export type EventPostScalarWhereWithAggregatesInput = {
    AND?: Prisma.EventPostScalarWhereWithAggregatesInput | Prisma.EventPostScalarWhereWithAggregatesInput[];
    OR?: Prisma.EventPostScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EventPostScalarWhereWithAggregatesInput | Prisma.EventPostScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"EventPost"> | string;
    eventName?: Prisma.StringWithAggregatesFilter<"EventPost"> | string;
    eventDescription?: Prisma.StringWithAggregatesFilter<"EventPost"> | string;
    eventStartDate?: Prisma.DateTimeWithAggregatesFilter<"EventPost"> | Date | string;
    eventEndDate?: Prisma.DateTimeWithAggregatesFilter<"EventPost"> | Date | string;
    eventLocation?: Prisma.JsonWithAggregatesFilter<"EventPost">;
    notificationType?: Prisma.EnumNotificationTypeWithAggregatesFilter<"EventPost"> | $Enums.NotificationType;
    eventImage?: Prisma.StringNullableWithAggregatesFilter<"EventPost"> | string | null;
    notes?: Prisma.StringNullableWithAggregatesFilter<"EventPost"> | string | null;
    postId?: Prisma.StringWithAggregatesFilter<"EventPost"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"EventPost"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"EventPost"> | Date | string;
};
export type EventPostCreateInput = {
    id?: string;
    eventName: string;
    eventDescription: string;
    eventStartDate: Date | string;
    eventEndDate: Date | string;
    eventLocation: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    notificationType?: $Enums.NotificationType;
    eventImage?: string | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    post: Prisma.PostCreateNestedOneWithoutEventPostInput;
    eventRoles?: Prisma.EventRolesCreateNestedManyWithoutEventPostInput;
};
export type EventPostUncheckedCreateInput = {
    id?: string;
    eventName: string;
    eventDescription: string;
    eventStartDate: Date | string;
    eventEndDate: Date | string;
    eventLocation: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    notificationType?: $Enums.NotificationType;
    eventImage?: string | null;
    notes?: string | null;
    postId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    eventRoles?: Prisma.EventRolesUncheckedCreateNestedManyWithoutEventPostInput;
};
export type EventPostUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventName?: Prisma.StringFieldUpdateOperationsInput | string;
    eventDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    eventStartDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    eventEndDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    eventLocation?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    notificationType?: Prisma.EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType;
    eventImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    post?: Prisma.PostUpdateOneRequiredWithoutEventPostNestedInput;
    eventRoles?: Prisma.EventRolesUpdateManyWithoutEventPostNestedInput;
};
export type EventPostUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventName?: Prisma.StringFieldUpdateOperationsInput | string;
    eventDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    eventStartDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    eventEndDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    eventLocation?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    notificationType?: Prisma.EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType;
    eventImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    postId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    eventRoles?: Prisma.EventRolesUncheckedUpdateManyWithoutEventPostNestedInput;
};
export type EventPostCreateManyInput = {
    id?: string;
    eventName: string;
    eventDescription: string;
    eventStartDate: Date | string;
    eventEndDate: Date | string;
    eventLocation: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    notificationType?: $Enums.NotificationType;
    eventImage?: string | null;
    notes?: string | null;
    postId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type EventPostUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventName?: Prisma.StringFieldUpdateOperationsInput | string;
    eventDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    eventStartDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    eventEndDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    eventLocation?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    notificationType?: Prisma.EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType;
    eventImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EventPostUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventName?: Prisma.StringFieldUpdateOperationsInput | string;
    eventDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    eventStartDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    eventEndDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    eventLocation?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    notificationType?: Prisma.EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType;
    eventImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    postId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EventPostNullableScalarRelationFilter = {
    is?: Prisma.EventPostWhereInput | null;
    isNot?: Prisma.EventPostWhereInput | null;
};
export type EventPostCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    eventName?: Prisma.SortOrder;
    eventDescription?: Prisma.SortOrder;
    eventStartDate?: Prisma.SortOrder;
    eventEndDate?: Prisma.SortOrder;
    eventLocation?: Prisma.SortOrder;
    notificationType?: Prisma.SortOrder;
    eventImage?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    postId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EventPostMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    eventName?: Prisma.SortOrder;
    eventDescription?: Prisma.SortOrder;
    eventStartDate?: Prisma.SortOrder;
    eventEndDate?: Prisma.SortOrder;
    notificationType?: Prisma.SortOrder;
    eventImage?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    postId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EventPostMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    eventName?: Prisma.SortOrder;
    eventDescription?: Prisma.SortOrder;
    eventStartDate?: Prisma.SortOrder;
    eventEndDate?: Prisma.SortOrder;
    notificationType?: Prisma.SortOrder;
    eventImage?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    postId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EventPostScalarRelationFilter = {
    is?: Prisma.EventPostWhereInput;
    isNot?: Prisma.EventPostWhereInput;
};
export type EventPostCreateNestedOneWithoutPostInput = {
    create?: Prisma.XOR<Prisma.EventPostCreateWithoutPostInput, Prisma.EventPostUncheckedCreateWithoutPostInput>;
    connectOrCreate?: Prisma.EventPostCreateOrConnectWithoutPostInput;
    connect?: Prisma.EventPostWhereUniqueInput;
};
export type EventPostUncheckedCreateNestedOneWithoutPostInput = {
    create?: Prisma.XOR<Prisma.EventPostCreateWithoutPostInput, Prisma.EventPostUncheckedCreateWithoutPostInput>;
    connectOrCreate?: Prisma.EventPostCreateOrConnectWithoutPostInput;
    connect?: Prisma.EventPostWhereUniqueInput;
};
export type EventPostUpdateOneWithoutPostNestedInput = {
    create?: Prisma.XOR<Prisma.EventPostCreateWithoutPostInput, Prisma.EventPostUncheckedCreateWithoutPostInput>;
    connectOrCreate?: Prisma.EventPostCreateOrConnectWithoutPostInput;
    upsert?: Prisma.EventPostUpsertWithoutPostInput;
    disconnect?: Prisma.EventPostWhereInput | boolean;
    delete?: Prisma.EventPostWhereInput | boolean;
    connect?: Prisma.EventPostWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EventPostUpdateToOneWithWhereWithoutPostInput, Prisma.EventPostUpdateWithoutPostInput>, Prisma.EventPostUncheckedUpdateWithoutPostInput>;
};
export type EventPostUncheckedUpdateOneWithoutPostNestedInput = {
    create?: Prisma.XOR<Prisma.EventPostCreateWithoutPostInput, Prisma.EventPostUncheckedCreateWithoutPostInput>;
    connectOrCreate?: Prisma.EventPostCreateOrConnectWithoutPostInput;
    upsert?: Prisma.EventPostUpsertWithoutPostInput;
    disconnect?: Prisma.EventPostWhereInput | boolean;
    delete?: Prisma.EventPostWhereInput | boolean;
    connect?: Prisma.EventPostWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EventPostUpdateToOneWithWhereWithoutPostInput, Prisma.EventPostUpdateWithoutPostInput>, Prisma.EventPostUncheckedUpdateWithoutPostInput>;
};
export type EnumNotificationTypeFieldUpdateOperationsInput = {
    set?: $Enums.NotificationType;
};
export type EventPostCreateNestedOneWithoutEventRolesInput = {
    create?: Prisma.XOR<Prisma.EventPostCreateWithoutEventRolesInput, Prisma.EventPostUncheckedCreateWithoutEventRolesInput>;
    connectOrCreate?: Prisma.EventPostCreateOrConnectWithoutEventRolesInput;
    connect?: Prisma.EventPostWhereUniqueInput;
};
export type EventPostUpdateOneRequiredWithoutEventRolesNestedInput = {
    create?: Prisma.XOR<Prisma.EventPostCreateWithoutEventRolesInput, Prisma.EventPostUncheckedCreateWithoutEventRolesInput>;
    connectOrCreate?: Prisma.EventPostCreateOrConnectWithoutEventRolesInput;
    upsert?: Prisma.EventPostUpsertWithoutEventRolesInput;
    connect?: Prisma.EventPostWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EventPostUpdateToOneWithWhereWithoutEventRolesInput, Prisma.EventPostUpdateWithoutEventRolesInput>, Prisma.EventPostUncheckedUpdateWithoutEventRolesInput>;
};
export type EventPostCreateWithoutPostInput = {
    id?: string;
    eventName: string;
    eventDescription: string;
    eventStartDate: Date | string;
    eventEndDate: Date | string;
    eventLocation: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    notificationType?: $Enums.NotificationType;
    eventImage?: string | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    eventRoles?: Prisma.EventRolesCreateNestedManyWithoutEventPostInput;
};
export type EventPostUncheckedCreateWithoutPostInput = {
    id?: string;
    eventName: string;
    eventDescription: string;
    eventStartDate: Date | string;
    eventEndDate: Date | string;
    eventLocation: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    notificationType?: $Enums.NotificationType;
    eventImage?: string | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    eventRoles?: Prisma.EventRolesUncheckedCreateNestedManyWithoutEventPostInput;
};
export type EventPostCreateOrConnectWithoutPostInput = {
    where: Prisma.EventPostWhereUniqueInput;
    create: Prisma.XOR<Prisma.EventPostCreateWithoutPostInput, Prisma.EventPostUncheckedCreateWithoutPostInput>;
};
export type EventPostUpsertWithoutPostInput = {
    update: Prisma.XOR<Prisma.EventPostUpdateWithoutPostInput, Prisma.EventPostUncheckedUpdateWithoutPostInput>;
    create: Prisma.XOR<Prisma.EventPostCreateWithoutPostInput, Prisma.EventPostUncheckedCreateWithoutPostInput>;
    where?: Prisma.EventPostWhereInput;
};
export type EventPostUpdateToOneWithWhereWithoutPostInput = {
    where?: Prisma.EventPostWhereInput;
    data: Prisma.XOR<Prisma.EventPostUpdateWithoutPostInput, Prisma.EventPostUncheckedUpdateWithoutPostInput>;
};
export type EventPostUpdateWithoutPostInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventName?: Prisma.StringFieldUpdateOperationsInput | string;
    eventDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    eventStartDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    eventEndDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    eventLocation?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    notificationType?: Prisma.EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType;
    eventImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    eventRoles?: Prisma.EventRolesUpdateManyWithoutEventPostNestedInput;
};
export type EventPostUncheckedUpdateWithoutPostInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventName?: Prisma.StringFieldUpdateOperationsInput | string;
    eventDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    eventStartDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    eventEndDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    eventLocation?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    notificationType?: Prisma.EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType;
    eventImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    eventRoles?: Prisma.EventRolesUncheckedUpdateManyWithoutEventPostNestedInput;
};
export type EventPostCreateWithoutEventRolesInput = {
    id?: string;
    eventName: string;
    eventDescription: string;
    eventStartDate: Date | string;
    eventEndDate: Date | string;
    eventLocation: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    notificationType?: $Enums.NotificationType;
    eventImage?: string | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    post: Prisma.PostCreateNestedOneWithoutEventPostInput;
};
export type EventPostUncheckedCreateWithoutEventRolesInput = {
    id?: string;
    eventName: string;
    eventDescription: string;
    eventStartDate: Date | string;
    eventEndDate: Date | string;
    eventLocation: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    notificationType?: $Enums.NotificationType;
    eventImage?: string | null;
    notes?: string | null;
    postId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type EventPostCreateOrConnectWithoutEventRolesInput = {
    where: Prisma.EventPostWhereUniqueInput;
    create: Prisma.XOR<Prisma.EventPostCreateWithoutEventRolesInput, Prisma.EventPostUncheckedCreateWithoutEventRolesInput>;
};
export type EventPostUpsertWithoutEventRolesInput = {
    update: Prisma.XOR<Prisma.EventPostUpdateWithoutEventRolesInput, Prisma.EventPostUncheckedUpdateWithoutEventRolesInput>;
    create: Prisma.XOR<Prisma.EventPostCreateWithoutEventRolesInput, Prisma.EventPostUncheckedCreateWithoutEventRolesInput>;
    where?: Prisma.EventPostWhereInput;
};
export type EventPostUpdateToOneWithWhereWithoutEventRolesInput = {
    where?: Prisma.EventPostWhereInput;
    data: Prisma.XOR<Prisma.EventPostUpdateWithoutEventRolesInput, Prisma.EventPostUncheckedUpdateWithoutEventRolesInput>;
};
export type EventPostUpdateWithoutEventRolesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventName?: Prisma.StringFieldUpdateOperationsInput | string;
    eventDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    eventStartDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    eventEndDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    eventLocation?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    notificationType?: Prisma.EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType;
    eventImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    post?: Prisma.PostUpdateOneRequiredWithoutEventPostNestedInput;
};
export type EventPostUncheckedUpdateWithoutEventRolesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventName?: Prisma.StringFieldUpdateOperationsInput | string;
    eventDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    eventStartDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    eventEndDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    eventLocation?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    notificationType?: Prisma.EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType;
    eventImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    postId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type EventPostCountOutputType
 */
export type EventPostCountOutputType = {
    eventRoles: number;
};
export type EventPostCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    eventRoles?: boolean | EventPostCountOutputTypeCountEventRolesArgs;
};
/**
 * EventPostCountOutputType without action
 */
export type EventPostCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventPostCountOutputType
     */
    select?: Prisma.EventPostCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * EventPostCountOutputType without action
 */
export type EventPostCountOutputTypeCountEventRolesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EventRolesWhereInput;
};
export type EventPostSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    eventName?: boolean;
    eventDescription?: boolean;
    eventStartDate?: boolean;
    eventEndDate?: boolean;
    eventLocation?: boolean;
    notificationType?: boolean;
    eventImage?: boolean;
    notes?: boolean;
    postId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    post?: boolean | Prisma.PostDefaultArgs<ExtArgs>;
    eventRoles?: boolean | Prisma.EventPost$eventRolesArgs<ExtArgs>;
    _count?: boolean | Prisma.EventPostCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["eventPost"]>;
export type EventPostSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    eventName?: boolean;
    eventDescription?: boolean;
    eventStartDate?: boolean;
    eventEndDate?: boolean;
    eventLocation?: boolean;
    notificationType?: boolean;
    eventImage?: boolean;
    notes?: boolean;
    postId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    post?: boolean | Prisma.PostDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["eventPost"]>;
export type EventPostSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    eventName?: boolean;
    eventDescription?: boolean;
    eventStartDate?: boolean;
    eventEndDate?: boolean;
    eventLocation?: boolean;
    notificationType?: boolean;
    eventImage?: boolean;
    notes?: boolean;
    postId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    post?: boolean | Prisma.PostDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["eventPost"]>;
export type EventPostSelectScalar = {
    id?: boolean;
    eventName?: boolean;
    eventDescription?: boolean;
    eventStartDate?: boolean;
    eventEndDate?: boolean;
    eventLocation?: boolean;
    notificationType?: boolean;
    eventImage?: boolean;
    notes?: boolean;
    postId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type EventPostOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "eventName" | "eventDescription" | "eventStartDate" | "eventEndDate" | "eventLocation" | "notificationType" | "eventImage" | "notes" | "postId" | "createdAt" | "updatedAt", ExtArgs["result"]["eventPost"]>;
export type EventPostInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    post?: boolean | Prisma.PostDefaultArgs<ExtArgs>;
    eventRoles?: boolean | Prisma.EventPost$eventRolesArgs<ExtArgs>;
    _count?: boolean | Prisma.EventPostCountOutputTypeDefaultArgs<ExtArgs>;
};
export type EventPostIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    post?: boolean | Prisma.PostDefaultArgs<ExtArgs>;
};
export type EventPostIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    post?: boolean | Prisma.PostDefaultArgs<ExtArgs>;
};
export type $EventPostPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "EventPost";
    objects: {
        post: Prisma.$PostPayload<ExtArgs>;
        eventRoles: Prisma.$EventRolesPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        eventName: string;
        eventDescription: string;
        eventStartDate: Date;
        eventEndDate: Date;
        eventLocation: runtime.JsonValue;
        notificationType: $Enums.NotificationType;
        eventImage: string | null;
        notes: string | null;
        postId: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["eventPost"]>;
    composites: {};
};
export type EventPostGetPayload<S extends boolean | null | undefined | EventPostDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EventPostPayload, S>;
export type EventPostCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EventPostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EventPostCountAggregateInputType | true;
};
export interface EventPostDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['EventPost'];
        meta: {
            name: 'EventPost';
        };
    };
    /**
     * Find zero or one EventPost that matches the filter.
     * @param {EventPostFindUniqueArgs} args - Arguments to find a EventPost
     * @example
     * // Get one EventPost
     * const eventPost = await prisma.eventPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventPostFindUniqueArgs>(args: Prisma.SelectSubset<T, EventPostFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EventPostClient<runtime.Types.Result.GetResult<Prisma.$EventPostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one EventPost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventPostFindUniqueOrThrowArgs} args - Arguments to find a EventPost
     * @example
     * // Get one EventPost
     * const eventPost = await prisma.eventPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventPostFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EventPostFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EventPostClient<runtime.Types.Result.GetResult<Prisma.$EventPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first EventPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventPostFindFirstArgs} args - Arguments to find a EventPost
     * @example
     * // Get one EventPost
     * const eventPost = await prisma.eventPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventPostFindFirstArgs>(args?: Prisma.SelectSubset<T, EventPostFindFirstArgs<ExtArgs>>): Prisma.Prisma__EventPostClient<runtime.Types.Result.GetResult<Prisma.$EventPostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first EventPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventPostFindFirstOrThrowArgs} args - Arguments to find a EventPost
     * @example
     * // Get one EventPost
     * const eventPost = await prisma.eventPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventPostFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EventPostFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EventPostClient<runtime.Types.Result.GetResult<Prisma.$EventPostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more EventPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventPosts
     * const eventPosts = await prisma.eventPost.findMany()
     *
     * // Get first 10 EventPosts
     * const eventPosts = await prisma.eventPost.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const eventPostWithIdOnly = await prisma.eventPost.findMany({ select: { id: true } })
     *
     */
    findMany<T extends EventPostFindManyArgs>(args?: Prisma.SelectSubset<T, EventPostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EventPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a EventPost.
     * @param {EventPostCreateArgs} args - Arguments to create a EventPost.
     * @example
     * // Create one EventPost
     * const EventPost = await prisma.eventPost.create({
     *   data: {
     *     // ... data to create a EventPost
     *   }
     * })
     *
     */
    create<T extends EventPostCreateArgs>(args: Prisma.SelectSubset<T, EventPostCreateArgs<ExtArgs>>): Prisma.Prisma__EventPostClient<runtime.Types.Result.GetResult<Prisma.$EventPostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many EventPosts.
     * @param {EventPostCreateManyArgs} args - Arguments to create many EventPosts.
     * @example
     * // Create many EventPosts
     * const eventPost = await prisma.eventPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends EventPostCreateManyArgs>(args?: Prisma.SelectSubset<T, EventPostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many EventPosts and returns the data saved in the database.
     * @param {EventPostCreateManyAndReturnArgs} args - Arguments to create many EventPosts.
     * @example
     * // Create many EventPosts
     * const eventPost = await prisma.eventPost.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many EventPosts and only return the `id`
     * const eventPostWithIdOnly = await prisma.eventPost.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends EventPostCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EventPostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EventPostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a EventPost.
     * @param {EventPostDeleteArgs} args - Arguments to delete one EventPost.
     * @example
     * // Delete one EventPost
     * const EventPost = await prisma.eventPost.delete({
     *   where: {
     *     // ... filter to delete one EventPost
     *   }
     * })
     *
     */
    delete<T extends EventPostDeleteArgs>(args: Prisma.SelectSubset<T, EventPostDeleteArgs<ExtArgs>>): Prisma.Prisma__EventPostClient<runtime.Types.Result.GetResult<Prisma.$EventPostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one EventPost.
     * @param {EventPostUpdateArgs} args - Arguments to update one EventPost.
     * @example
     * // Update one EventPost
     * const eventPost = await prisma.eventPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends EventPostUpdateArgs>(args: Prisma.SelectSubset<T, EventPostUpdateArgs<ExtArgs>>): Prisma.Prisma__EventPostClient<runtime.Types.Result.GetResult<Prisma.$EventPostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more EventPosts.
     * @param {EventPostDeleteManyArgs} args - Arguments to filter EventPosts to delete.
     * @example
     * // Delete a few EventPosts
     * const { count } = await prisma.eventPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends EventPostDeleteManyArgs>(args?: Prisma.SelectSubset<T, EventPostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more EventPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventPosts
     * const eventPost = await prisma.eventPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends EventPostUpdateManyArgs>(args: Prisma.SelectSubset<T, EventPostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more EventPosts and returns the data updated in the database.
     * @param {EventPostUpdateManyAndReturnArgs} args - Arguments to update many EventPosts.
     * @example
     * // Update many EventPosts
     * const eventPost = await prisma.eventPost.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more EventPosts and only return the `id`
     * const eventPostWithIdOnly = await prisma.eventPost.updateManyAndReturn({
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
    updateManyAndReturn<T extends EventPostUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EventPostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EventPostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one EventPost.
     * @param {EventPostUpsertArgs} args - Arguments to update or create a EventPost.
     * @example
     * // Update or create a EventPost
     * const eventPost = await prisma.eventPost.upsert({
     *   create: {
     *     // ... data to create a EventPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventPost we want to update
     *   }
     * })
     */
    upsert<T extends EventPostUpsertArgs>(args: Prisma.SelectSubset<T, EventPostUpsertArgs<ExtArgs>>): Prisma.Prisma__EventPostClient<runtime.Types.Result.GetResult<Prisma.$EventPostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of EventPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventPostCountArgs} args - Arguments to filter EventPosts to count.
     * @example
     * // Count the number of EventPosts
     * const count = await prisma.eventPost.count({
     *   where: {
     *     // ... the filter for the EventPosts we want to count
     *   }
     * })
    **/
    count<T extends EventPostCountArgs>(args?: Prisma.Subset<T, EventPostCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EventPostCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a EventPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventPostAggregateArgs>(args: Prisma.Subset<T, EventPostAggregateArgs>): Prisma.PrismaPromise<GetEventPostAggregateType<T>>;
    /**
     * Group by EventPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventPostGroupByArgs} args - Group by arguments.
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
    groupBy<T extends EventPostGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EventPostGroupByArgs['orderBy'];
    } : {
        orderBy?: EventPostGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EventPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the EventPost model
     */
    readonly fields: EventPostFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for EventPost.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__EventPostClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    post<T extends Prisma.PostDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PostDefaultArgs<ExtArgs>>): Prisma.Prisma__PostClient<runtime.Types.Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    eventRoles<T extends Prisma.EventPost$eventRolesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EventPost$eventRolesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EventRolesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the EventPost model
 */
export interface EventPostFieldRefs {
    readonly id: Prisma.FieldRef<"EventPost", 'String'>;
    readonly eventName: Prisma.FieldRef<"EventPost", 'String'>;
    readonly eventDescription: Prisma.FieldRef<"EventPost", 'String'>;
    readonly eventStartDate: Prisma.FieldRef<"EventPost", 'DateTime'>;
    readonly eventEndDate: Prisma.FieldRef<"EventPost", 'DateTime'>;
    readonly eventLocation: Prisma.FieldRef<"EventPost", 'Json'>;
    readonly notificationType: Prisma.FieldRef<"EventPost", 'NotificationType'>;
    readonly eventImage: Prisma.FieldRef<"EventPost", 'String'>;
    readonly notes: Prisma.FieldRef<"EventPost", 'String'>;
    readonly postId: Prisma.FieldRef<"EventPost", 'String'>;
    readonly createdAt: Prisma.FieldRef<"EventPost", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"EventPost", 'DateTime'>;
}
/**
 * EventPost findUnique
 */
export type EventPostFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventPost
     */
    select?: Prisma.EventPostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventPost
     */
    omit?: Prisma.EventPostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventPostInclude<ExtArgs> | null;
    /**
     * Filter, which EventPost to fetch.
     */
    where: Prisma.EventPostWhereUniqueInput;
};
/**
 * EventPost findUniqueOrThrow
 */
export type EventPostFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventPost
     */
    select?: Prisma.EventPostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventPost
     */
    omit?: Prisma.EventPostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventPostInclude<ExtArgs> | null;
    /**
     * Filter, which EventPost to fetch.
     */
    where: Prisma.EventPostWhereUniqueInput;
};
/**
 * EventPost findFirst
 */
export type EventPostFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventPost
     */
    select?: Prisma.EventPostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventPost
     */
    omit?: Prisma.EventPostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventPostInclude<ExtArgs> | null;
    /**
     * Filter, which EventPost to fetch.
     */
    where?: Prisma.EventPostWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EventPosts to fetch.
     */
    orderBy?: Prisma.EventPostOrderByWithRelationInput | Prisma.EventPostOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for EventPosts.
     */
    cursor?: Prisma.EventPostWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EventPosts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EventPosts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of EventPosts.
     */
    distinct?: Prisma.EventPostScalarFieldEnum | Prisma.EventPostScalarFieldEnum[];
};
/**
 * EventPost findFirstOrThrow
 */
export type EventPostFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventPost
     */
    select?: Prisma.EventPostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventPost
     */
    omit?: Prisma.EventPostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventPostInclude<ExtArgs> | null;
    /**
     * Filter, which EventPost to fetch.
     */
    where?: Prisma.EventPostWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EventPosts to fetch.
     */
    orderBy?: Prisma.EventPostOrderByWithRelationInput | Prisma.EventPostOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for EventPosts.
     */
    cursor?: Prisma.EventPostWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EventPosts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EventPosts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of EventPosts.
     */
    distinct?: Prisma.EventPostScalarFieldEnum | Prisma.EventPostScalarFieldEnum[];
};
/**
 * EventPost findMany
 */
export type EventPostFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventPost
     */
    select?: Prisma.EventPostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventPost
     */
    omit?: Prisma.EventPostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventPostInclude<ExtArgs> | null;
    /**
     * Filter, which EventPosts to fetch.
     */
    where?: Prisma.EventPostWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EventPosts to fetch.
     */
    orderBy?: Prisma.EventPostOrderByWithRelationInput | Prisma.EventPostOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing EventPosts.
     */
    cursor?: Prisma.EventPostWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EventPosts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EventPosts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of EventPosts.
     */
    distinct?: Prisma.EventPostScalarFieldEnum | Prisma.EventPostScalarFieldEnum[];
};
/**
 * EventPost create
 */
export type EventPostCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventPost
     */
    select?: Prisma.EventPostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventPost
     */
    omit?: Prisma.EventPostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventPostInclude<ExtArgs> | null;
    /**
     * The data needed to create a EventPost.
     */
    data: Prisma.XOR<Prisma.EventPostCreateInput, Prisma.EventPostUncheckedCreateInput>;
};
/**
 * EventPost createMany
 */
export type EventPostCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventPosts.
     */
    data: Prisma.EventPostCreateManyInput | Prisma.EventPostCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * EventPost createManyAndReturn
 */
export type EventPostCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventPost
     */
    select?: Prisma.EventPostSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the EventPost
     */
    omit?: Prisma.EventPostOmit<ExtArgs> | null;
    /**
     * The data used to create many EventPosts.
     */
    data: Prisma.EventPostCreateManyInput | Prisma.EventPostCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventPostIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * EventPost update
 */
export type EventPostUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventPost
     */
    select?: Prisma.EventPostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventPost
     */
    omit?: Prisma.EventPostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventPostInclude<ExtArgs> | null;
    /**
     * The data needed to update a EventPost.
     */
    data: Prisma.XOR<Prisma.EventPostUpdateInput, Prisma.EventPostUncheckedUpdateInput>;
    /**
     * Choose, which EventPost to update.
     */
    where: Prisma.EventPostWhereUniqueInput;
};
/**
 * EventPost updateMany
 */
export type EventPostUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update EventPosts.
     */
    data: Prisma.XOR<Prisma.EventPostUpdateManyMutationInput, Prisma.EventPostUncheckedUpdateManyInput>;
    /**
     * Filter which EventPosts to update
     */
    where?: Prisma.EventPostWhereInput;
    /**
     * Limit how many EventPosts to update.
     */
    limit?: number;
};
/**
 * EventPost updateManyAndReturn
 */
export type EventPostUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventPost
     */
    select?: Prisma.EventPostSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the EventPost
     */
    omit?: Prisma.EventPostOmit<ExtArgs> | null;
    /**
     * The data used to update EventPosts.
     */
    data: Prisma.XOR<Prisma.EventPostUpdateManyMutationInput, Prisma.EventPostUncheckedUpdateManyInput>;
    /**
     * Filter which EventPosts to update
     */
    where?: Prisma.EventPostWhereInput;
    /**
     * Limit how many EventPosts to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventPostIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * EventPost upsert
 */
export type EventPostUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventPost
     */
    select?: Prisma.EventPostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventPost
     */
    omit?: Prisma.EventPostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventPostInclude<ExtArgs> | null;
    /**
     * The filter to search for the EventPost to update in case it exists.
     */
    where: Prisma.EventPostWhereUniqueInput;
    /**
     * In case the EventPost found by the `where` argument doesn't exist, create a new EventPost with this data.
     */
    create: Prisma.XOR<Prisma.EventPostCreateInput, Prisma.EventPostUncheckedCreateInput>;
    /**
     * In case the EventPost was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.EventPostUpdateInput, Prisma.EventPostUncheckedUpdateInput>;
};
/**
 * EventPost delete
 */
export type EventPostDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventPost
     */
    select?: Prisma.EventPostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventPost
     */
    omit?: Prisma.EventPostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventPostInclude<ExtArgs> | null;
    /**
     * Filter which EventPost to delete.
     */
    where: Prisma.EventPostWhereUniqueInput;
};
/**
 * EventPost deleteMany
 */
export type EventPostDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which EventPosts to delete
     */
    where?: Prisma.EventPostWhereInput;
    /**
     * Limit how many EventPosts to delete.
     */
    limit?: number;
};
/**
 * EventPost.eventRoles
 */
export type EventPost$eventRolesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.EventRolesWhereInput;
    orderBy?: Prisma.EventRolesOrderByWithRelationInput | Prisma.EventRolesOrderByWithRelationInput[];
    cursor?: Prisma.EventRolesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EventRolesScalarFieldEnum | Prisma.EventRolesScalarFieldEnum[];
};
/**
 * EventPost without action
 */
export type EventPostDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventPost
     */
    select?: Prisma.EventPostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventPost
     */
    omit?: Prisma.EventPostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventPostInclude<ExtArgs> | null;
};
//# sourceMappingURL=EventPost.d.ts.map