using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ToDo.DataAccess;
using ToDo.DataAccess.Entities;

namespace ToDo.Web.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ToDoItemController : ControllerBase
    {
        private readonly ToDoContext _db;
        public ToDoItemController(ToDoContext toDoContext)
        {
            _db = toDoContext;
        }

        [HttpGet]
        public async Task<ActionResult<List<ToDoItem>>> GetToDoItems()
        {
            List<ToDoItem> toDoItems = await _db.ToDoItems.ToListAsync();
            return toDoItems;
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteToDo([FromRoute]int id)
        {
            ToDoItem toDoItem = await _db.ToDoItems.FirstOrDefaultAsync(e => e.Id==id);
            if(toDoItem == null)
            {
                return NoContent();
            }
            _db.Remove(toDoItem);
            await _db.SaveChangesAsync();
            return Ok();
        }

        [HttpPatch]
        public async Task<ActionResult<ToDoItem>> UpdateToDo([FromBody]ToDoItem toDoItem)
        {
            _db.Update(toDoItem);
            await _db.SaveChangesAsync();
            return toDoItem;
        }

        [HttpPost]
        public async Task<ActionResult<ToDoItem>> AddToDo([FromBody] ToDoItem toDoItem)
        {
            _db.Add(toDoItem);
            await _db.SaveChangesAsync();
            return toDoItem;
        }
    }
}//add update delete
 //POST PATCH DELETE
