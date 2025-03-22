import MaterialsHeader from "@/components/SurveyComs/Common/MaterialsHeader"
import { Radio } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import type { RadioChangeEvent } from 'antd';


function SingleSelect() {
  const currentCom = useSelector(state => state.currentMaterialCom)
  const allComs = useSelector(state => state.coms)
  const status = allComs[currentCom].status
  const { title, desc, options, position, titleSize, descSize, titleWeight, descWeight, titleItalic, descItalic, titleColor, descColor } = status
  const dispatch = useDispatch()
  console.log("看一看", status);
  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };
  return (
    <div className={position.currentStatus === 0 ? "" : "text-center"}>
      <MaterialsHeader title={title.status} desc={desc.status} titleSize={titleSize.status[titleSize.currentStatus]} descSize={descSize.status[descSize.currentStatus]} titleWeight={titleWeight.currentStatus} descWeight={descWeight.currentStatus} titleItalic={titleItalic.currentStatus} descItalic={descItalic.currentStatus} titleColor={titleColor.status} descColor={descColor.status} />
      <Radio.Group
        onChange={onChange}
        value={options.currentStatus}
        options={
          options.status.map((item: string, index: number) => {
            return { label: item, value: index }
          })
        }
      />
    </div>
  )
}

export default SingleSelect