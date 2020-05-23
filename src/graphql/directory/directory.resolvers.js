import SECTIONS from './directory.data';

const directoryResolvers = {
  Query: {
    sections: (_root, _args, _context) => {
      console.log("DIRECTORY RESOLVER - QUERY SECTIONS");
      return SECTIONS;
    }
  }
}

export default directoryResolvers;