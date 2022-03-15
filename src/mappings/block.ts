import { ethereum } from '@graphprotocol/graph-ts';

import { Block } from '../../generated/schema';

function handleBlock(block: ethereum.Block): void {
  let id = block.number.toString();
  let entity = new Block(id);
  entity.hash = block.hash;
  entity.timestamp = block.timestamp;
  entity.gasUsed = block.gasUsed;
  entity.gasLimit = block.gasLimit;
  entity.save();
}

export { handleBlock };
