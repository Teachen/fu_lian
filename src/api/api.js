import {
  wxRequest
} from '@/utils/wxRequest';

let env = "-test" //-dev 或者 -test
const apiMall = 'https://api.fuliaoquan.com/api/v1';   


//一级分类
const rootCtegoryList = (params) => wxRequest(params, apiMall + '/api/mall/rootCtegoryList');
//二级三级分类
const childGoodsCatetoryList = (params) => wxRequest(params, apiMall + '/api/mall/childGoodsCatetoryList');
//商品分类--end

//查询广告列表
const getAdList = (params) => wxRequest(params, apiMall + '/api/adverts/list');

//微信的jscode换取sessionKey
const wxJsCode2Session = (params) => wxRequest(params, apiMall + "/user/SessionKey");

//保存用户意见
const saveSuggest = (params) => wxRequest(params, apiMall + '/user/FeedBack');

//用户协议提取
const UserRule = (params) => wxRequest(params, apiMall + '/user/Agreement');

//添加数据到数据库用户的信息头像信息oppid
const addUser= (params) => wxRequest(params, apiMall + '/user/Login');

//发送短信
const SendSms = (params) => wxRequest(params, apiMall + '/user/SendSms');

//验证手机入数据库
const IsMobile = (params) => wxRequest(params, apiMall + '/user/IsMobile');

//我的发布信息
const MyInvitation = (params) => wxRequest(params, apiMall + '/user/MyInvitation');

//我的收藏
const MyCollect = (params) => wxRequest(params, apiMall + '/user/MyCollect');

//我的评论
const MyComments = (params) => wxRequest(params, apiMall + '/user/MyComments');

//删除帖子
const MyInvitationDel = (params) => wxRequest(params, apiMall + '/user/MyInvitationDel');

//删除收藏
const MyCollectDel = (params) => wxRequest(params, apiMall + '/user/MyCollectDel');

//帖子详情页数据
const GetDetails = (params) => wxRequest(params, apiMall + '/Invitation/GetDetails');

//删除评论
const MyCommentsDel = (params) => wxRequest(params, apiMall + '/user/MyCommentsDel');

//添加评论
const CommentsAdd = (params) => wxRequest(params, apiMall + '/Invitation/CommentsAdd');

//删除评论
const CommentsBack = (params) => wxRequest(params, apiMall + '/Invitation/CommentsBack');

//统计图片
const GetPicClick = (params) => wxRequest(params, apiMall + '/Invitation/GetPicClick');


//点赞
const GetLikes = (params) => wxRequest(params, apiMall + '/Invitation/GetLikes');

//收藏
const GetCollect = (params) => wxRequest(params, apiMall + '/Invitation/GetCollect');


// Simon
//点击产品详情
const getCeListDel = (params) => wxRequest(params, apiMall + '/Article/GetInfo');            

//点击banner 统计
const bannerCount = (params) => wxRequest(params, apiMall + '/Invitation/BannerClick');            

//纽扣产品列表
const getCeList = (params) => wxRequest(params, apiMall + '/Invitation/GetList2');            

//产品更新日记
const updateVersion = (params) => wxRequest(params, apiMall + '/Article/GetList');  

//获取栏目
const getNavList = (params) => wxRequest(params, apiMall + '/Invitation/GetType');                        

//获取需求栏目
const getNavList1 = (params) => wxRequest(params, apiMall + '/Invitation/GetType1');

//轮播广告
const getBanner = (params) => wxRequest(params, apiMall + '/Invitation/GetBanner');

//帖子点赞
const getLikes = (params) => wxRequest(params, apiMall + '/Invitation/GetLikes');

//帖子发布详情
const publishDail = (params) => wxRequest(params, apiMall + '/Invitation/Add');

//图片上传
const UploadImg = (params) => wxRequest(params, apiMall + '/Invitation/Upload');

//图片删除
const PicDelimg = (params) => wxRequest(params, apiMall + '/Invitation/PicDel');        

//获取当前位置
const GetAddress = (params) => wxRequest(params, apiMall + '/Invitation/GetAddress'); 

//获取头像历史
const GetAvator = (params) => wxRequest(params, apiMall + '/Invitation/UserList1');


//收集formId
const FormId = (params) => wxRequest(params, apiMall + '/user/FormId');

//获取卡片列表
const GetList = (params) => wxRequest(params, apiMall + '/card/GetList');

//获取我的卡片状态
const MyCard = (params) => wxRequest(params, apiMall + '/card/MyCard');

//用户中心卡片详情
const UserCard = (params) => wxRequest(params, apiMall + '/card/UserCard');

//授权发布
const OpenMobile = (params) => wxRequest(params, apiMall + '/user/IsOpenMobile');

//用户卡片收藏
const GetCollect1 = (params) => wxRequest(params, apiMall + '/card/GetCollect');

//卡片编辑
const Edit = (params) => wxRequest(params, apiMall + '/card/Edit'); 


//获得公司类型
const GetTypes = (params) => wxRequest(params, apiMall + '/card/GetTypes');

//新增卡片
const Add = (params) => wxRequest(params, apiMall + '/card/add');

//获取我的卡片收藏信息
const MyCardCollect = (params) => wxRequest(params, apiMall + '/card/MyCardCollect');

//卡片收藏删除
const MyCardCollectDel = (params) => wxRequest(params, apiMall + '/card/MyCardCollectDel');

//我的收藏测试版本接口
const MyCollect1 = (params) => wxRequest(params, apiMall + '/user/MyCollect1');

//请求个人中心页面是否绑手机号码
const IsMobileOk = (params) => wxRequest(params, apiMall + '/user/IsMobileOk');
//历史搜索
const History = (params) => wxRequest(params, apiMall + '/search/History');

//搜索列表
const Getlist_h = (params) => wxRequest(params, apiMall + '/search/Getlist');

//搜索列表
const Getlist_h1 = (params) => wxRequest(params, apiMall + '/search/Getlist1');

//清除历史搜索
const Del_h = (params) => wxRequest(params, apiMall + '/search/Del');

//请求新品
const GetNewList = (params) => wxRequest(params, apiMall + '/Invitation/GetNewList');

//请求消息中心
const MsgList = (params) => wxRequest(params, apiMall + '/user/MsgList');


//请求消息中心
const MsgTotal = (params) => wxRequest(params, apiMall + '/user/MsgTotal');

//获取access_token
const AccessToken = (params) => wxRequest(params, apiMall + '/user/AccessToken');

//获取二维码
const GetWxCode = (params) => wxRequest(params, apiMall + '/Invitation/GetWxCode');


//获取电话积分检测
const GetMobile = (params) => wxRequest(params, apiMall + '/user/GetMobile');

//刷新帖子
const RefreshInvitation = (params) => wxRequest(params, apiMall + '/user/RefreshInvitation');


const UserScore = (params) => wxRequest(params, apiMall + '/user/UserScore');

const CardMap = (params) => wxRequest(params, apiMall + '/card/CardMap');

const GetPopup = (params) => wxRequest(params, apiMall + '/Invitation/GetPopup');

const Logo1= (params) => wxRequest(params, apiMall + '/user/Login1');

const GiftExchange= (params) => wxRequest(params, apiMall + '/user/GiftExchange');

const GiftList= (params) => wxRequest(params, apiMall + '/user/GiftList');

const CardMap1 = (params) => wxRequest(params, apiMall + '/card/CardMap1');


export default {
  CardMap1,
  GiftList,
  GiftExchange,
  Logo1,
  GetPopup,
  CardMap,
  UserScore,
  RefreshInvitation,
  GetMobile,
  GetWxCode,
  AccessToken,
  MsgTotal,
  MsgList,
  Getlist_h1,
  updateVersion,
  History,
  bannerCount,
  Getlist_h,
  getCeListDel,
  Del_h,
  GetNewList,
  FormId,
  IsMobileOk,
  OpenMobile,
  GetAvator,
  getNavList,
  getAdList,
  GetList,
  MyCard,
  UserCard,
  GetCollect1,
  MyCollect1,
  childGoodsCatetoryList,
  rootCtegoryList,
  getCeList,
  getNavList1,
  Edit,
  Add,
  MyCardCollect,  
  GetTypes,
  getLikes,
  getBanner,
  GetAddress,
  UploadImg,
  publishDail,
  PicDelimg,
  wxJsCode2Session,
  GetLikes,
  GetCollect,
  GetPicClick,
  CommentsBack,
  CommentsAdd,
  MyCommentsDel,
  MyCardCollectDel,
  GetDetails,
  MyCollectDel,
  MyInvitationDel,
  MyComments,
  MyCollect,
  MyInvitation,
  IsMobile,
  SendSms,
  addUser,
  UserRule,
  saveSuggest
}
