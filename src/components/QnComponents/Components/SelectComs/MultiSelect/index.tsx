import MaterialsHeader from "@/components/QnComponents/Common/MaterialsHeader"
import { useOutletContext } from "react-router-dom";
import { IComponentHeader } from "@/types/componentsType";
import { Checkbox } from 'antd';
import type { GetProp } from 'antd';
import useChangeCurrentCom from "@/utils/hooks/useChangeCurrentCom";

function MultiSelect({ status }: any) {

  const outletContext: IComponentHeader = useOutletContext() || status;
  const { title, desc, options, position, titleSize, descSize, titleWeight, descWeight, titleItalic, descItalic, titleColor, descColor } = outletContext

  useChangeCurrentCom()
  const onCheckBoxChange: GetProp<typeof Checkbox.Group, 'onChange'> = (checkedValues) => {
    console.log('checked = ', checkedValues);
  }

  return (
    <div className={position.currentStatus === 0 ? "" : "text-center"}>
      <MaterialsHeader
        title={title.status}
        desc={desc.status}
        titleSize={titleSize.status[titleSize.currentStatus]}
        descSize={descSize.status[descSize.currentStatus]}
        titleWeight={titleWeight.currentStatus}
        descWeight={descWeight.currentStatus}
        titleItalic={titleItalic.currentStatus}
        descItalic={descItalic.currentStatus}
        titleColor={titleColor.status}
        descColor={descColor.status}
      />
      <Checkbox.Group
        options={options.status.map((item: string) => {
          return { label: item, value: item }
        })}
        onChange={onCheckBoxChange}
      />
    </div>
  )
}

export default MultiSelect