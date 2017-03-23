import {BaseData} from 'one-base';

class MemberData extends BaseData{
  constructor(prefix){
    super(prefix);
  }
}

const memberData=new MemberData('member');
export default memberData;
