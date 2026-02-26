import React from 'react'
import modulesMap from '../config/modulesMap.js'
import { getUrl } from '../config/paths.js'
import arrowIcon from '../../images/icons/Q_ArrowForward-24.svg'

function S_RelatedModules({ modules }) {
  const knownModules = modules
    .map((name) => name.trim())
    .filter((name) => modulesMap[name])

  if (knownModules.length === 0) {
    return null
  }

  return (
    <div className="S_RelatedModules">
      <div className="M_TitleText">
        <h4>Используемые модули</h4>
        <p className="caption light">Технические особенности веб-плаката</p>
      </div>
      <div className="C_ModulesRows">
        {knownModules.map((name) => {
          const moduleData = modulesMap[name]

          return (
            <a key={name} href={getUrl(moduleData.url)} className="O_ModuleRow">
              <div className="W_ModulesRow">
                <img
                  src={moduleData.icon}
                  alt={name}
                  className="Q_ModuleRowIcon"
                />
                <div className="M_ModuleDescription">
                  <p className="caption-bold">{name}</p>
                  <p className="caption light">{moduleData.language}</p>
                </div>
              </div>
              <img className="arrowIcon" src={arrowIcon} alt="" />
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default S_RelatedModules
