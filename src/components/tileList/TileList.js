import React from "react";
import { Tile } from '/Users/bea/Desktop/DevProject/react_challenge_start/src/components/tile/Tile.js';

export const TileList = ({tiles}) => {

  return (
    <div>
      {tiles.map((tile, index) => {
        <Tile key={index} tile={tile} />
      })}
    </div>
  );
};
