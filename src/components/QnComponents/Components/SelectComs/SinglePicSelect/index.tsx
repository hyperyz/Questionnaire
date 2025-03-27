import MaterialsHeader from "@/components/QnComponents/Common/MaterialsHeader"
import { IComponentHeader } from "@/types/componentsType";
import { useOutletContext } from "react-router-dom";
import { Radio } from 'antd';
import type { RadioChangeEvent } from 'antd';
import PicItem from "@/components/QnComponents/Common/PicItem";
import useChangeCurrentCom from "@/utils/hooks/useChangeCurrentCom";
import { useState } from "react";

function SinglePicSelect({ status }: any) {

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
      <div className="flex wrap">
        <Radio.Group
          onChange={onOptionChange}
          value={optionValue}
          options={
            options.status.map((item, index) => {
              return {
                value: index,
                label: <PicItem />
              }
            })
          }
        />
      </div>
    </div>
  )
}

export default SinglePicSelect