import MaterialsHeader from "@/components/QnComponents/Common/MaterialsHeader"
import { Radio } from 'antd';
import type { RadioChangeEvent } from 'antd';
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { IComponentHeader } from "@/types/componentsType";
import useChangeCurrentCom from "@/utils/hooks/useChangeCurrentCom";
function SingleSelect({ status }: any) {
  const outletContext: IComponentHeader = useOutletContext() || status;
  const { title, desc, options, position, titleSize, descSize, titleWeight, descWeight, titleItalic, descItalic, titleColor, descColor } = outletContext
  const [optionValue, setOptionValue] = useState(options.currentStatus);
  useChangeCurrentCom()

  const onOptionChange = (e: RadioChangeEvent) => {
    setOptionValue(e.target.value);
  };


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
      <Radio.Group
        onChange={onOptionChange}
        value={optionValue}
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