import { BaseRecordList } from "./BaseRecordList";
import { IBaseRecord, BaseRecord } from "./BaseRecord";

export interface IEffectiveItemBase extends IBaseRecord {

    name: string;

    description: string;

    effectIds: number[];
}

export class EffectiveItemBase<IRecord extends IEffectiveItemBase, Record extends IRecord> extends BaseRecord<IRecord, Record> implements IEffectiveItemBase {

    readonly name!: string;

    readonly description!: string;

    readonly effectIds!: number[];

    get effects() { return $Effect.findAll(this.effectIds); }
}

export abstract class EffectiveItemBaseList<IRecord extends IEffectiveItemBase, Record extends IRecord> extends BaseRecordList<IRecord, Record> {
}

export interface IActor extends IBaseRecord {

    name: string;
}

export class Actor extends BaseRecord<IActor, Actor> implements IActor {

    readonly name!: string;
}

export class ActorList extends BaseRecordList<IActor, Actor> {
    readonly name = "Actor";
    readonly recordClass = Actor;
}

export const $Actor = new ActorList();

export interface IEffect extends IBaseRecord {

    name: string;

    description: string;
}

export class Effect extends BaseRecord<IEffect, Effect> implements IEffect {

    readonly name!: string;

    readonly description!: string;
}

export class EffectList extends BaseRecordList<IEffect, Effect> {
    readonly name = "Effect";
    readonly recordClass = Effect;
}

export const $Effect = new EffectList();

export interface IEquipment extends IBaseRecord {

    rarityId: number;

    typeId: number;
    /** 装備部位 複数個所を覆う場合はビット&で指定、付けられる部位を選択できる場合は配列の複数要素に指定 */
    parts: number[];
}

export class Equipment extends BaseRecord<IEquipment, Equipment> implements IEquipment {

    readonly rarityId!: number;

    get rarity() { return $Rarity.find(this.rarityId); }

    readonly typeId!: number;

    get type() { return $EquipmentType.find(this.typeId); }
    /** 装備部位 複数個所を覆う場合はビット&で指定、付けられる部位を選択できる場合は配列の複数要素に指定 */
    readonly parts!: number[];
}

export class EquipmentList extends BaseRecordList<IEquipment, Equipment> {
    readonly name = "Equipment";
    readonly recordClass = Equipment;
}

export const $Equipment = new EquipmentList();

export interface IEquipmentPart extends IBaseRecord {

    name: string;
}

export class EquipmentPart extends BaseRecord<IEquipmentPart, EquipmentPart> implements IEquipmentPart {

    readonly name!: string;
}

export class EquipmentPartList extends BaseRecordList<IEquipmentPart, EquipmentPart> {
    readonly name = "EquipmentPart";
    readonly recordClass = EquipmentPart;
}

export const $EquipmentPart = new EquipmentPartList();

export interface IEquipmentType extends IBaseRecord {

    name: string;
}

export class EquipmentType extends BaseRecord<IEquipmentType, EquipmentType> implements IEquipmentType {

    readonly name!: string;
}

export class EquipmentTypeList extends BaseRecordList<IEquipmentType, EquipmentType> {
    readonly name = "EquipmentType";
    readonly recordClass = EquipmentType;
}

export const $EquipmentType = new EquipmentTypeList();

export interface IGacha extends IBaseRecord {

    name: string;

    drawTypeIds: number[];
}

export class Gacha extends BaseRecord<IGacha, Gacha> implements IGacha {

    readonly name!: string;

    readonly drawTypeIds!: number[];

    get drawTypes() { return $GachaDrawType.findAll(this.drawTypeIds); }
}

export class GachaList extends BaseRecordList<IGacha, Gacha> {
    readonly name = "Gacha";
    readonly recordClass = Gacha;
}

export const $Gacha = new GachaList();

export interface IGachaContent extends IBaseRecord {

    weight: number;

    contentType: string;

    contentId: number;
}

export class GachaContent extends BaseRecord<IGachaContent, GachaContent> implements IGachaContent {

    readonly weight!: number;

    readonly contentType!: string;

    readonly contentId!: number;
}

export class GachaContentList extends BaseRecordList<IGachaContent, GachaContent> {
    readonly name = "GachaContent";
    readonly recordClass = GachaContent;
}

export const $GachaContent = new GachaContentList();

export interface IGachaContentGroup extends IBaseRecord {

    name?: string;

    weight: number;

    contentIds: number[];
}

export class GachaContentGroup extends BaseRecord<IGachaContentGroup, GachaContentGroup> implements IGachaContentGroup {

    readonly name?: string;

    readonly weight!: number;

    readonly contentIds!: number[];

    get contents() { return $GachaContent.findAll(this.contentIds); }
}

export class GachaContentGroupList extends BaseRecordList<IGachaContentGroup, GachaContentGroup> {
    readonly name = "GachaContentGroup";
    readonly recordClass = GachaContentGroup;
}

export const $GachaContentGroup = new GachaContentGroupList();

export interface IGachaDraw extends IBaseRecord {

    contentGroupIds: number[];
}

export class GachaDraw extends BaseRecord<IGachaDraw, GachaDraw> implements IGachaDraw {

    readonly contentGroupIds!: number[];

    get contentGroups() { return $GachaContentGroup.findAll(this.contentGroupIds); }
}

export class GachaDrawList extends BaseRecordList<IGachaDraw, GachaDraw> {
    readonly name = "GachaDraw";
    readonly recordClass = GachaDraw;
}

export const $GachaDraw = new GachaDrawList();

export interface IGachaDrawType extends IBaseRecord {

    gachaDrawTypeNameId: number;
    /** 消費アイテムID */
    requireItemId: number;
    /** 消費アイテム個数 */
    requireItemAmount: number;
    /** 一回のボタン操作での許容リピート数(1連ガチャを10回引く的な) */
    allowRepeatCount?: number;
    /** 各引きの中身ID */
    drawIds: number[];
}

export class GachaDrawType extends BaseRecord<IGachaDrawType, GachaDrawType> implements IGachaDrawType {

    readonly gachaDrawTypeNameId!: number;

    get gachaDrawTypeName() { return $GachaDrawTypeName.find(this.gachaDrawTypeNameId); }
    /** 消費アイテムID */
    readonly requireItemId!: number;
    /** 消費アイテム */
    get requireItem() { return $Item.find(this.requireItemId); }
    /** 消費アイテム個数 */
    readonly requireItemAmount!: number;
    /** 一回のボタン操作での許容リピート数(1連ガチャを10回引く的な) */
    readonly allowRepeatCount?: number;
    /** 各引きの中身ID */
    readonly drawIds!: number[];
    /** 各引きの中身 */
    get draws() { return $GachaDraw.findAll(this.drawIds); }
}

export class GachaDrawTypeList extends BaseRecordList<IGachaDrawType, GachaDrawType> {
    readonly name = "GachaDrawType";
    readonly recordClass = GachaDrawType;
}

export const $GachaDrawType = new GachaDrawTypeList();

export interface IGachaDrawTypeName extends IBaseRecord {

    name: string;
}

export class GachaDrawTypeName extends BaseRecord<IGachaDrawTypeName, GachaDrawTypeName> implements IGachaDrawTypeName {

    readonly name!: string;
}

export class GachaDrawTypeNameList extends BaseRecordList<IGachaDrawTypeName, GachaDrawTypeName> {
    readonly name = "GachaDrawTypeName";
    readonly recordClass = GachaDrawTypeName;
}

export const $GachaDrawTypeName = new GachaDrawTypeNameList();

export interface IGachaSchedule extends IBaseRecord {

    gachaId: number;

    startAt: Date;

    endAt: Date;
}

export class GachaSchedule extends BaseRecord<IGachaSchedule, GachaSchedule> implements IGachaSchedule {

    readonly gachaId!: number;

    get gacha() { return $Gacha.find(this.gachaId); }

    readonly startAt!: Date;

    readonly endAt!: Date;
}

export class GachaScheduleList extends BaseRecordList<IGachaSchedule, GachaSchedule> {
    readonly name = "GachaSchedule";
    readonly recordClass = GachaSchedule;
}

export const $GachaSchedule = new GachaScheduleList();

export interface IItem extends IBaseRecord {

    name: string;

    description: string;
}

export class Item extends BaseRecord<IItem, Item> implements IItem {

    readonly name!: string;

    readonly description!: string;
}

export class ItemList extends BaseRecordList<IItem, Item> {
    readonly name = "Item";
    readonly recordClass = Item;
}

export const $Item = new ItemList();

export interface IRarity extends IBaseRecord {

    name: string;
}

export class Rarity extends BaseRecord<IRarity, Rarity> implements IRarity {

    readonly name!: string;
}

export class RarityList extends BaseRecordList<IRarity, Rarity> {
    readonly name = "Rarity";
    readonly recordClass = Rarity;
}

export const $Rarity = new RarityList();

export interface ISingleGacha extends IBaseRecord {

    name: string;

    gachaId: number;
}

export class SingleGacha extends BaseRecord<ISingleGacha, SingleGacha> implements ISingleGacha {

    readonly name!: string;

    readonly gachaId!: number;

    get gacha() { return $Gacha.find(this.gachaId); }
}

export class SingleGachaList extends BaseRecordList<ISingleGacha, SingleGacha> {
    readonly name = "SingleGacha";
    readonly recordClass = SingleGacha;
}

export const $SingleGacha = new SingleGachaList();

export interface ISkill extends IEffectiveItemBase {
}

export class Skill extends EffectiveItemBase<ISkill, Skill> implements ISkill {
}

export class SkillList extends EffectiveItemBaseList<ISkill, Skill> {
    readonly name = "Skill";
    readonly recordClass = Skill;
}

export const $Skill = new SkillList();

export interface IState extends IEffectiveItemBase {

    rarityId: number;
}

export class State extends EffectiveItemBase<IState, State> implements IState {

    readonly rarityId!: number;

    get rarity() { return $Rarity.find(this.rarityId); }
}

export class StateList extends EffectiveItemBaseList<IState, State> {
    readonly name = "State";
    readonly recordClass = State;
}

export const $State = new StateList();

export interface IStepUpGacha extends IBaseRecord {

    name: string;

    stepIds: number[];
}

export class StepUpGacha extends BaseRecord<IStepUpGacha, StepUpGacha> implements IStepUpGacha {

    readonly name!: string;

    readonly stepIds!: number[];

    get steps() { return $Gacha.findAll(this.stepIds); }
}

export class StepUpGachaList extends BaseRecordList<IStepUpGacha, StepUpGacha> {
    readonly name = "StepUpGacha";
    readonly recordClass = StepUpGacha;
}

export const $StepUpGacha = new StepUpGachaList();

export interface IStory extends IBaseRecord {

    name: string;
}

export class Story extends BaseRecord<IStory, Story> implements IStory {

    readonly name!: string;
}

export class StoryList extends BaseRecordList<IStory, Story> {
    readonly name = "Story";
    readonly recordClass = Story;
}

export const $Story = new StoryList();

export interface ITip extends IBaseRecord {

    title: string;

    content: string;
}

export class Tip extends BaseRecord<ITip, Tip> implements ITip {

    readonly title!: string;

    readonly content!: string;
}

export class TipList extends BaseRecordList<ITip, Tip> {
    readonly name = "Tip";
    readonly recordClass = Tip;
}

export const $Tip = new TipList();

